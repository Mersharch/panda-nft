import React, { useState, useEffect } from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollTopBtn = () => {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 300) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
    },[])

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div className='fixed bottom-[15px] right-[20px]'>
        {show && <div onClick={() => ScrollToTop()} className='w-min p-1 border border-[#1E50FF] rounded-full cursor-pointer hover:border-white'><FaAngleDoubleUp size={35} color="#1E50FF"/></div> }
    </div>
  )
}

export default ScrollTopBtn