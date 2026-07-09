"use client";

import { useEffect } from "react";

const FB_PAGE_ID = "100632615096463";

export default function FacebookChat() {
  useEffect(() => {
    // Inject #fb-root if not present
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    // Inject fb-customerchat plugin element
    if (!document.querySelector(".fb-customerchat")) {
      const chat = document.createElement("div");
      chat.className = "fb-customerchat";
      chat.setAttribute("page_id", FB_PAGE_ID);
      chat.setAttribute("theme_color", "#006AFF");
      chat.setAttribute("logged_in_greeting", "Xin chào! Chúng tôi có thể hỗ trợ gì cho bạn?");
      chat.setAttribute("logged_out_greeting", "Xin chào! Chúng tôi có thể hỗ trợ gì cho bạn?");
      chat.setAttribute("minimized", "true");
      document.body.appendChild(chat);
    }

    // Load Facebook SDK
    if (!document.getElementById("facebook-jssdk")) {
      (window as any).fbAsyncInit = function () {
        (window as any).FB.init({ xfbml: true, version: "v19.0" });
      };

      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  // Render nothing on server — purely client-side mount
  return null;
}
