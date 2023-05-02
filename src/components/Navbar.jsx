import React, { useState } from "react";
import logo from "../assets/Panda=Esport-1.png";
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from "react-icons/ai";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { SiReadthedocs } from "react-icons/si";
import { FaMicroblog, FaInfoCircle } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex w-full items-center mx-auto my-2 px-5 justify-between max-w-[1640px">
      {/* LEFT */}
      <div className="flex gap-5 items-center">
        <AiOutlineMenu
          onClick={() => setNav(!nav)}
          size={30}
          className="md:hidden"
        />
        <NavLink to={"/"} className="flex flex-row gap-2 items-center">
          <img src={logo} alt="" />
          <span>Panda NFT</span>
        </NavLink>
      </div>
      {/* MIDDLE */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-5">
          <li className="duration-500 hover:text-[#1e50ff]">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="duration-500 hover:text-[#1e50ff]">
            <NavLink to={"/discover"}>Discover</NavLink>
          </li>
          <li className="duration-500 hover:text-[#1e50ff]">
            <NavLink to={"/docs"}>Docs</NavLink>
          </li>
          <li className="duration-500 hover:text-[#1e50ff]">
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li className="duration-500 hover:text-[#1e50ff]">
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <li className="duration-500 hover:text-[#1e50ff]">
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
      {/* RIGHT */}
      <button className=" hover:text-lg duration-500">Connect Wallet</button>

      {/* MOBILE MENU */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-full z-20 bg-slate-900 duration-500 block"
            : "hidden"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <NavLink to={"/"} className="text-2xl p-4 font-semibold">
          Panda NFT
        </NavLink>

        <nav>
          <ul className="flex flex-col p-4">
            <li className="flex text-xl py-4 group">
              <AiFillHome
                size={25}
                className="mr-4 duration-500 group-hover:fill-[#1e50ff]"
              />
              <NavLink
                className="duration-500 group-hover:text-[#1e50ff]"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="flex text-xl py-4 group">
              <RiCompassDiscoverFill
                size={25}
                className="mr-4 duration-500 group-hover:fill-[#1e50ff]"
              />
              <NavLink
                className="duration-500 group-hover:text-[#1e50ff]"
                to={"/discover"}
              >
                Discover
              </NavLink>
            </li>

            <li className="flex text-xl py-4 group">
              <SiReadthedocs
                size={25}
                className="mr-4 duration-500 group-hover:fill-[#1e50ff]"
              />
              <NavLink
                className="duration-500 group-hover:text-[#1e50ff]"
                to={"/docs"}
              >
                Docs
              </NavLink>
            </li>

            <li className="flex text-xl py-4 group">
              <FaMicroblog
                size={25}
                className="mr-4 duration-500 group-hover:fill-[#1e50ff]"
              />
              <NavLink
                className="duration-500 group-hover:text-[#1e50ff]"
                to={"/blog"}
              >
                Blog
              </NavLink>
            </li>

            <li className="flex text-xl py-4 group">
              <FaInfoCircle
                size={25}
                className="mr-4 duration-500 group-hover:fill-[#1e50ff]"
              />
              <NavLink
                className="duration-500 group-hover:text-[#1e50ff]"
                to={"/about"}
              >
                About Us
              </NavLink>
            </li>

            <li className="flex text-xl py-4 group">
              <MdAddCall
                size={25}
                className="mr-4 duration-500 group-hover:fill-[#1e50ff]"
              />
              <NavLink
                className="duration-500 group-hover:text-[#1e50ff]"
                to={"/contact"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
