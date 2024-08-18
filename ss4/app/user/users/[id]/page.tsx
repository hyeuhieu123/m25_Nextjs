import React from "react";

export default function IdUser(props: any) {
  console.log("id user:", props);
  const { params } = props;

  return <div>Id user: {params.id}</div>;
}
