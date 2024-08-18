import React from "react";

export default function ProjectTask(props: any) {
  console.log("nhiệm vụ dự án", props);
  const { params } = props;

  return (
    <div>
      danh sách nhiệm vụ dự án:{params.task} {params.id}
    </div>
  );
}
