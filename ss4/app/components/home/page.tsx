"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  const home = () => {
    router.push("/components/home");
  };
  const about = () => {
    router.push("/components/about");
  };
  const login = () => {
    router.push("/components/login");
  };
  const contact = () => {
    router.push("/components/contact");
  };
  return (
    <div className="flex gap-9">
      <button style={{ color: "red" }} onClick={home}>
        home
      </button>
      <button onClick={about}>about</button>
      <button onClick={login}>login</button>
      <button onClick={contact}>contact</button>
    </div>
  );
}
