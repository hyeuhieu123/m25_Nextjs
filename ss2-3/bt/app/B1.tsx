import React from 'react'
import { IoEyeSharp } from "react-icons/io5";

export default function B1() {
  return (
    <>
    <b>Bài 1 </b> <br />
    <label htmlFor="" className='text-blue-500 text-[14px]'>Label</label> <br />
    <input type="text" placeholder='Placeholder' className='text-[18px] border-2 rounded-lg ' />
    <p className='absolute top-[55px] left-[190px]'><IoEyeSharp /></p>
    <p className='text-[14px]'>Helper Text</p>
    </>
  )
}
