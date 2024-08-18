import React from "react";

export default function IdProject(props: any) {
  console.log("Id dự án", props);
  const { params } = props;

  return <div>Id dự án: {params.id}</div>;
}
