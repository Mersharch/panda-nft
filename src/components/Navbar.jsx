import React, { useState } from 'react'
import logo from '../assets/Panda=Esport-1.png'
import { AiOutlineMenu, AiOutlineClose, AiFillHome} from "react-icons/ai";
import { RiCompassDiscoverFill} from "react-icons/ri";
import { SiReadthedocs } from "react-icons/si";
import { FaMicroblog, FaInfoCircle } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const Navbar = () => {

    const [nav, setNav] = useState(false)
  return (
    <div className='flex items-center mx-auto my-2 justify-between max-w-[1640px'>
        {/* LEFT */}
            <div className="flex gap-5 items-center">
                <AiOutlineMenu onClick={() => setNav(!nav)} size={30} className='md:hidden' />
                <div className='flex flex-row gap-2 items-center'>
                <img src={logo} alt='' />
                <span>Panda NFT</span>
                </div>
                
            </div>
        {/* MIDDLE */}
            <nav className='hidden md:flex'>
                <ul className='flex items-center gap-5'>
                    <li className='duration-500 hover:text-[#1e50ff]'><a href="#">Home</a></li>
                    <li className='duration-500 hover:text-[#1e50ff]'><a href="#">Discover</a></li>
                    <li className='duration-500 hover:text-[#1e50ff]'><a href="#">Docs</a></li>
                    <li className='duration-500 hover:text-[#1e50ff]'><a href="#">Blog</a></li>
                    <li className='duration-500 hover:text-[#1e50ff]'><a href="#">About Us</a></li>
                    <li className='duration-500 hover:text-[#1e50ff]'><a href="#">Contact Us</a></li>

                </ul>
            </nav>
        {/* RIGHT */}
            <button className='border border-[#1E50FF] rounded-xl p-2 cursor-pointer hover:text-lg duration-500'>Connect Wallet</button>

        {/* MOBILE MENU */}
        <div className={nav ? 'fixed top-0 left-0 w-full z-20 bg-slate-900 duration-500 block' : 'hidden'}>
            <AiOutlineClose onClick={()=>setNav(false)} size={30} className='absolute right-4 top-4 cursor-pointer'/>

            <h2 className='text-2xl p-4 font-semibold'>Panda NFT</h2>

            <nav>
                <ul className='flex flex-col p-4'>
                    <li className='flex text-xl py-4 group'><AiFillHome size={25} className='mr-4 duration-500 group-hover:fill-[#1e50ff]'/><a className='duration-500 group-hover:text-[#1e50ff]' href='#'>Home</a></li>

                    <li className='flex text-xl py-4 group'><RiCompassDiscoverFill size={25} className='mr-4 duration-500 group-hover:fill-[#1e50ff]'/><a className='duration-500 group-hover:text-[#1e50ff]' href='#'>Discover</a></li>

                    <li className='flex text-xl py-4 group'><SiReadthedocs size={25} className='mr-4 duration-500 group-hover:fill-[#1e50ff]'/><a className='duration-500 group-hover:text-[#1e50ff]' href='#'>Docs</a></li>
                    
                    <li className='flex text-xl py-4 group'><FaMicroblog size={25} className='mr-4 duration-500 group-hover:fill-[#1e50ff]'/><a className='duration-500 group-hover:text-[#1e50ff]' href='#'>Blog</a></li>

                    <li className='flex text-xl py-4 group'><FaInfoCircle size={25} className='mr-4 duration-500 group-hover:fill-[#1e50ff]'/><a className='duration-500 group-hover:text-[#1e50ff]' href='#'>About Us</a></li>

                    <li className='flex text-xl py-4 group'><MdAddCall size={25} className='mr-4 duration-500 group-hover:fill-[#1e50ff]'/><a className='duration-500 group-hover:text-[#1e50ff]' href='#'>Contact Us</a></li>
                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Navbar