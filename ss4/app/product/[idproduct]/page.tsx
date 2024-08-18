import React from "react";

export default function ProductDetail(props: any) {
  console.log("giá trị của props:", props);

  const { params } = props;
  return <div>Products id: {params.idproduct}</div>;
}
