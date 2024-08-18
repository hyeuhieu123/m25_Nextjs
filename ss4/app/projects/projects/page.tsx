import React from 'react'

export default function ProjectName(props:any) {
    console.log("tên dự án",props);
    const {params}= props;

  return (
    <div>
      tên dự án: {params.project}
    </div>
  )
}
