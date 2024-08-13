import React from 'react'
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function B34() {
  return (
    <>
    <b>B3-4</b>
    <form className='ml-[50px] border-2 box-border w-[500px] pl-[80px] h-[600px]'  action="">
        <div className='pd-2'>
        <b className='text-3xl'>Form Sign up</b><br />
        <label htmlFor="">Name</label><br />
        <input className='border-2 w-[300px] rounded-lg' type="text" placeholder='Your name' /><br />
        <br />
        <label htmlFor="">Email</label><br />
        <input className='border-2 w-[300px] rounded-lg' type="text" placeholder='you@company.com'/><br />
        <br />
        <label htmlFor="">Phone number</label><br />
        <div className='flex flex-row border-2 w-[300px] rounded-lg'>
            US
            <BsFillArrowDownCircleFill />
            <input className='w-[259px]' type="phone" placeholder='+84(123)456-789'/>
            </div>
        <br />
        <label htmlFor="">Address</label><br />
        <textarea className='h-[100px] w-[300px] border-2 rounded-lg'/><br />
        <p>Skills</p>
        <div className='flex flex-row gap-[15px]'>
            <div className='flex flex-col '>
                <div><input type="checkbox" /> HTML</div>
                <div><input type="checkbox" /> UX design</div>
                <div><input type="checkbox" /> CSS</div>
            </div>
            <div className='flex flex-col '>
                <div><input type="checkbox" /> JavaScript</div>
                <div><input type="checkbox" /> ReactJS</div>
                <div><input type="checkbox" /> Java</div>
            </div>
        </div><br />
        <button className='border-2 bg-purple-600 text-center w-[300px] h-[40px] rounded-lg text-white'>Sign up</button>
        </div>
    </form>
    </>
  )
}
