import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='bg-[#101828] w-full text-[#98A2B3] px-2 md:px-10 py-5 mt-[10rem]'>
      <small className='flex items-center justify-between'>
        <span className='text-inherit'>2024 Brainstorm Group. All rights reserved.</span>
        <ul className='flex items-center gap-[1rem] text-xl'>
          <li><MdFacebook /></li>
          <li><FaXTwitter /></li>
          <li><FaLinkedin /></li>
        </ul>
      </small>
    </footer>
  )
}
