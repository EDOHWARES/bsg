import React, { useState } from 'react';
import {images} from '../../assets/assets';
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <header className='py-2 md:py-5 px-2 md:px-10 shadow-md mb-[5rem] w-full absolute top-0 left-0'>
        <div className="content flex items-center justify-between relative">
            <div className="logo w-[3rem] cursor-pointer">
                <img src={images.logo} alt="logo" />
            </div>
            <nav className={`absolute ${showMobileNav ? 'block' : 'hidden'} md:block py-8 shadow-2xl top-[3rem] bg-white w-full md:shadow-none md:py-0 md:w-auto md:static`}>
                <ul className='flex flex-col md:flex-row items-center gap-10 text-gray-600'>
                    <Link to={'/'} className='cursor-pointer border-b-2 border-b-transparent hover:border-b-black duration-500'>Home</Link>
                    <Link to={'/about'} className='cursor-pointer border-b-2 border-b-transparent hover:border-b-black duration-500'>About</Link>
                    <Link to={'/contact'} className='cursor-pointer border-b-2 border-b-transparent hover:border-b-black duration-500'>Contact</Link>
                    <Link to={'/news'} className='cursor-pointer border-b-2 border-b-transparent hover:border-b-black duration-500'>Latest News</Link>
                    <Link to={'/blogs'} className='cursor-pointer border-b-2 border-b-transparent hover:border-b-black duration-500'>Blogs</Link>
                    <Link to={'/resources'} className='cursor-pointer border-b-2 border-b-transparent hover:border-b-black duration-500'>Resources</Link>
                    <Link to={'/auth/login'}><button className='bg-primary hover:bg-primaryHover duration-500 py-2 px-4 rounded-md text-white '>Sign In</button></Link>
                </ul>

            </nav>
            <div onClick={() => setShowMobileNav(prev => !prev)} className="menu md:hidden text-xl cursor-pointer">
                {showMobileNav ? <LiaTimesSolid/> : <CiMenuBurger />}
            </div>
        </div>
    </header>
  )
}

export default Header