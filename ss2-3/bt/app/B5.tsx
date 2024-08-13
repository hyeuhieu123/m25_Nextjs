import React from 'react'
import { PiWarningCircle } from "react-icons/pi";
import "./b5.scss"
export default function B5() {
  return (
    <>
        <p className='text-3xl'>B5</p>
    <div className='border-2 w-2/6 ml-[50px] h-[240px] '>
    <div className='ml-[60px]'>
        <div className='mt-[20px] text-5xl text-red-600'>
            <PiWarningCircle />
        </div><br />
        <b>Delete blog post</b><br />
        <p className='text-gray-500'>Are you sure you want to delete this post? This action <br />cannot be undone.</p>
        <br />
        <div className='btn'>
            <button className='cancel'>Cancel</button>
            <button className='delete'>Delete</button>    
        </div>
        
    </div>
    </div>
    </>
  )
}
