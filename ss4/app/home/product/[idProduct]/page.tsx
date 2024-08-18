"use client";
import React from "react";
interface idProduct {
  idProduct: string;
}
interface Props {
  params: idProduct;
}

export default function ProductDetail(props: any) {
  console.log("giá trị props", props);
  const { params } = props;
  return <div>san pham co id la {params.idProduct}</div>;
}
// client component
// server component
