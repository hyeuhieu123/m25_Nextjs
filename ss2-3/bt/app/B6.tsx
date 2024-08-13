import React from 'react'
import { PiCowboyHatFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import "./b6.scss"

export default function B6() {
    return (
        <>
            <b>B6</b>
            <div className='navigation'>
                <div className='start'>
                    <div className='icon'>
                        <div><PiCowboyHatFill className='hat' /> </div>
                        <div className='text'>Handsome Boi</div>
                    </div>
                </div>
                <div className='between'>
                    <div>Home</div>
                    <div className='text-gray-500'>Updates</div>
                    <div className='text-gray-500'>Services</div>
                    <div className='text-gray-500'>Features</div>
                    <div className='text-gray-500'>About us</div>
                </div>
                <div className='end'>
                    <RxAvatar />
                </div>
            </div>
        </>
    )
}
