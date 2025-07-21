"use client";

import { Phone, MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/+5541991021157"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="flex items-center justify-center fixed z-50 bottom-6 right-6 rounded-full glass pulse-on-hover w-12 h-12"
      style={{ boxShadow: "0 4px 24px 0 rgba(37, 211, 102, 0.25)" }}
    >
      <span className="relative flex items-center justify-center">
        <MessageCircle
          className="text-green-500 flex items-center justify-center"
          size={26}
        />
        <Phone
          className="text-green-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          size={10}
          strokeWidth={3}
        />
      </span>
    </a>
  );
}
