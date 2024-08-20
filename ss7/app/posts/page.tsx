"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
export default function page() {
  const [inputValue, setInputValue] = useState("");
  //   const route = useRouter();
  //khai báo hàm handleChangeInput
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setInputValue(value);
  };
  const handleClick = () => {
    console.log(inputValue);
  };
  return (
    <div>
      <input type="text" onChange={handleChangeInput} />
      <button onClick={handleClick}>tìm kiếm</button>
    </div>
  );
}
