"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const searchParam = useSearchParams();
  const idProduct = searchParam.get("id");
  const nameProduct = searchParam.get("name");
  console.log("searchParam", idProduct);
  console.log("searchParam", nameProduct);
  return (
    <div>
      trang dnah sach san pham
      <p>san pham vua tim kiem co id la :{idProduct}</p>
    </div>
  );
}
