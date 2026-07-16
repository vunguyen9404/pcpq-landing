import { NextResponse } from "next/server";

// Simple in-memory rate limiter cache
const ipCache = new Map<string, number[]>();
const LIMIT = 3; // Max 3 requests
const WINDOW = 5 * 60 * 1000; // 5 minutes window in milliseconds

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. IP-based Rate Limiter Check
    // Get client IP address
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const now = Date.now();

    if (!ipCache.has(ip)) {
      ipCache.set(ip, []);
    }

    // Clean up timestamps older than WINDOW
    const timestamps = ipCache.get(ip)!.filter((t) => now - t < WINDOW);
    timestamps.push(now);
    ipCache.set(ip, timestamps);

    if (timestamps.length > LIMIT) {
      return NextResponse.json(
        { error: "Thao tác quá nhanh. Anh vui lòng đợi 5 phút sau và thử lại nhé!" },
        { status: 429 }
      );
    }

    // 2. Honeypot check (nickname)
    // Bots usually fill hidden inputs. If filled, we drop silently by returning fake success.
    if (body.nickname && body.nickname.trim() !== "") {
      console.warn(`Honeypot filled - Bot detected from IP: ${ip}`);
      return NextResponse.json({ created: 1, status: "mocked" });
    }

    const apiUrl = process.env.GOOGLE_SHEET_SCRIPT_URL;

    if (!apiUrl) {
      return NextResponse.json(
        { error: "Missing SheetDB URL configuration" },
        { status: 500 }
      );
    }

    // Get current time in Vietnam Timezone
    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    // Format data inside a 'data' array matching SheetDB format
    const payload = {
      data: [
        {
          "Thời gian": timestamp,
          "Họ và tên": body.name,
          "Số điện thoại": body.phone,
          "Email": body.email,
          "Sản phẩm quan tâm": body.product,
          "Nhu cầu": body.demand,
        },
      ],
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `SheetDB responded with status ${response.status}: ${errorText}` },
        { status: 502 }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
