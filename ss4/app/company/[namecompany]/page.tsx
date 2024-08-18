import React from "react";

export default function CompanyName(props: any) {
  console.log("tên công ty:", props);
  const { params } = props;
  return <div>Tên công ty: {params.namecompany}</div>;
}
