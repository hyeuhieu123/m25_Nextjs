"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const contact = () => {
    router.push("/auth/contact");
  };
  return (
    <div className="flex gap-9">
      Đây là trang chủ
      <button>Home</button>
      <button onClick={contact}>Contact</button>
    </div>
  );
}
