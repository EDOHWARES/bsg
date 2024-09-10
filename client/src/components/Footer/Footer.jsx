import React from 'react';
import { images } from '../../assets/assets';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='px-2 md:px-10 bg-lime-50 pt-10 mt-8'>
      <div className='space-y-4'>
        <div className="top flex items-start justify-between">
          <div className='flex flex-col gap-4'>
            <img src={images.logo} alt="logo" className='w-[5rem]' />
            <hr />
            <p className='kaushan text-2xl'>Brainstorm the present, Master the past, <br /> Ace the future!</p>
            </div>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='cursor-pointer border-b border-b-transparent hover:border-b-[#800e80] duration-500 w-fit'>Privacy policy</li>
            <li className='cursor-pointer border-b border-b-transparent hover:border-b-[#800e80] duration-500 w-fit'>Contact us</li>
            <li className='cursor-pointer border-b border-b-transparent hover:border-b-[#800e80] duration-500 w-fit'>Terms and conditions</li>
            <li className='cursor-pointer border-b border-b-transparent hover:border-b-[#800e80] duration-500 w-fit'>Blogs</li>
            <li className='cursor-pointer border-b border-b-transparent hover:border-b-[#800e80] duration-500 w-fit'>About us</li>
            <li className='cursor-pointer border-b border-b-transparent hover:border-b-[#800e80] duration-500 w-fit'>demo</li>
          </ul>
          <div className='flex flex-col items-center gap-6'>
            <form className='flex flex-col items-start gap-2'>
              <input placeholder='Subscribe for newsletter' type="email" className='bg-white w-[20rem] indent-4 h-[3rem] rounded-[8px] border' />
              <button className='flex items-center justify-center w-full text-white h-[3rem] px-4 rounded-[8px] bg-[#800e80]'>Subscribe</button>
            </form>
            <div className="socials flex items-center gap-2 text-2xl text-gray-600">
              <FaFacebook className='cursor-pointer hover:text-black duration-500' />
              <BsTwitterX className='cursor-pointer hover:text-black duration-500'/>
              <FaYoutube className='cursor-pointer hover:text-black duration-500'/>
              <FaWhatsappSquare className='cursor-pointer hover:text-black duration-500'/>
            </div>
          </div>
        </div>
        <div className="bottom w-full text-center border-t text-gray-600 py-4">
          <small>&copy; 2024 Brainstorm grop. All rights reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer