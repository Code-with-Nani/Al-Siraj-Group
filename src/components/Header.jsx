import React, { useState } from "react";
import logo from "../assests/logo.svg";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {

  const [isOpen, setOpen] = useState(false);

  const openMenu = () =>{
    setOpen(!isOpen);
  };

  const closeMenu = () =>{
    setOpen(false);
  };

  return (
    <>
      <div className={`main h-[100px] selection:text-[#F7E74B] bg-black bg-opacity-25 fixed top-0 left-0 bottom-0 right-0 z-[999] ${isOpen ? 'backdrop-blur-lg bg-opacity-25 ' : 'backdrop-blur-0'}`}>


        <div className="nav lg:flex justify-between items-center xl:mx-36 lg:mx-20 mt-4 hidden ">
          <div className="left">
           <a href="/"><img className="h-[75px]" src={logo} alt="Al-Siraj logo" /></a> 
          </div>
          <div className="right list-none flex justify-center items-center gap-6 text-white gotham_l  leading-none ">
           <Link to={"/"}> <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#F7E74B]  py-[4px]">Home</li></Link>
           <Link to={"/about"}> <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#F7E74B]  py-[4px]">About</li></Link>
           <Link to={"/services"}> <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#F7E74B]  py-[4px]">Services</li></Link>
           <Link to={"/gallery"}> <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#F7E74B]  py-[4px]">Gallery</li></Link>
           <Link to={"/packages"}> <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#F7E74B]  py-[4px]">Packages</li></Link>
           <Link to={"/blogs"}> <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#F7E74B]  py-[4px]">Blogs</li></Link>
           <Link to={"/contact"}> <li className="cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-[#F7E74B]  py-[4px]">Contact</li></Link>
          </div>
        </div>

        <div className="sm-nav flex justify-between mx-7 mt-4 items-center lg:hidden">
          <div className="left">
          <a href="/"><img className="h-[75px]" src={logo} alt="Al-Siraj logo" /></a> 
          </div>
          <div className="right">
          <span onClick={openMenu}  className={`text-3xl text-white  ${isOpen ? 'hidden' : 'block'}`}><RiMenu3Fill /></span> 
          <span onClick={openMenu}  className={`text-3xl text-white  ${isOpen ? 'block' : 'hidden'}`}><IoClose /></span> 
          </div>
        </div>
        {
          isOpen &&
           <div className="bg-black bg-opacity-25 mt-[9px] h-[900px] backdrop-blur-lg">
              <div  className="list-none gap-6 text-white gotham_l mx-7 pt-10  text-[24px] ">
           <Link to={"/"}> <li onClick={closeMenu} className="cursor-pointer border-b-2 border-[#F7E74B]  py-[4px]">Home</li></Link>
           <Link to={"/about"}> <li onClick={closeMenu} className="cursor-pointer border-b-2 border-[#F7E74B]  py-[4px]">About</li></Link>
           <Link to={"/services"}> <li onClick={closeMenu} className="cursor-pointer border-b-2 border-[#F7E74B]  py-[4px]">Services</li></Link>
           <Link to={"/gallery"}> <li onClick={closeMenu} className="cursor-pointer border-b-2 border-[#F7E74B]  py-[4px]">Gallery</li></Link>
           <Link to={"/packages"}> <li onClick={closeMenu} className="cursor-pointer border-b-2 border-[#F7E74B]  py-[4px]">Packages</li></Link>
           <Link to={"/blogs"}> <li onClick={closeMenu} className="cursor-pointer border-b-2 border-[#F7E74B]  py-[4px]">Blogs</li></Link>
           <Link to={"/contact"}> <li onClick={closeMenu} className="cursor-pointer border-b-2 border-[#F7E74B]  py-[4px]">Contact</li></Link>
          </div>
           </div>
        }


      </div>
    </>
  );
};

export default Header;
