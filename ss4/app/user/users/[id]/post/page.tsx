import React from "react";

export default function UserPost(props: any) {
  console.log("post user:", props);
  const { params } = props;

  return (
    <div>
      Post user :{params.post}
      {params.id}
    </div>
  );
}
