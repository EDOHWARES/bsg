import React from 'react';
import {images} from '../../assets/assets';

const Header = () => {
  return (
    <header className='py-2 md:py-5 px-2 md:px-10 shadow-md mb-[5rem]'>
        <div className="content flex items-center justify-between">
            <div className="logo w-[5rem]">
                <img src={images.logo} alt="logo" />
            </div>
            <nav>
                <ul className='flex items-center gap-10 text-gray-600'>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Latest News</li>
                    <li>Blogs</li>
                    <li><button className='bg-[#800e80] hover:bg-[#5e135e] duration-500 py-2 px-4 rounded-md text-white '>Sign Up</button></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header