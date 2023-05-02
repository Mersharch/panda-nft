import React from "react";
import logo from "../assets/Panda=Esport-1.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mt-10 md:mt-20 gap-10 p-0 self-end">
      <div className="flex flex-col items-center justify-center md:items-start md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row gap-2 items-center">
            <img src={logo} alt="" />
            <span className="text-xl">Panda NFT</span>
          </div>
          <p className="text-[#ADB9C7] mt-8 text-center">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-semibold">Resources</h3>
          <ul className="mt-8 flex flex-col gap-5">
            <li className="text-center">Help Center</li>
            <li className="text-center">Platform Status</li>
            <li className="text-center">Partners</li>
            <li className="text-center">Gas-Free Marketplace</li>
            <li className="text-center">Blog</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-semibold text-left">Company</h3>
          <ul className="mt-8 flex flex-col gap-5 lg:text-center">
            <li className="text-center lg:text-left">Our Team</li>
            <li className="text-center lg:text-left">About Us</li>
            <li className="text-center lg:text-left">Contact Us</li>
            <li className="text-center">Career</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-semibold">Contact</h3>
          <ul className="mt-8 flex flex-col gap-5">
            <li className="w-48 text-center lg:text-center">
              Dansoman, Accra, Ghana
            </li>
            <div></div>
          </ul>
        </div>
      </div>
      <h3 className="lg:self-center text-xs flex flex-col text-center">
        2022 All Right Reserved
        <span>
          Designed By{" "}
          <a
            href="https://www.figma.com/@aryormdhnn"
            target="_blank"
            rel="noreferrer"
          >
            Aryo
          </a>
        </span>
        <span>
          Developed By{" "}
          <a
            href="https://github.com/Mersharch"
            target="_blank"
            rel="noreferrer"
          >
            Mershack Demenya
          </a>
        </span>
      </h3>
    </footer>
  );
};

export default Footer;
