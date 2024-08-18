import React from "react";

export default function UserName(props: any) {
  console.log("tên người dùng:", props);

  const { params } = props;
  return <div>Danh sách người dùng:{params.username}</div>;
}
