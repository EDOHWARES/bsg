import React from 'react';
import { images } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { ImCalculator } from "react-icons/im";
import { BsPersonSquare } from "react-icons/bs";
import { PiExamFill } from "react-icons/pi";


const NavItems = ({title, icon, link}) => {
    const location = useLocation();
    return (
        <Link to={link} className={`flex px-4 flex-row items-center space-x-2 text-white text-base cursor-pointer py-2 ${location.pathname==link ? 'bg-primary' : 'bg-transparent'} hover:bg-primary  duration-500`}>
            {icon}
            <span className='hidden md:block'>{title}</span>
        </Link>
    )
}


const Navbar = ({showCalc}) => {
    
  return (
    <nav className='p-4 px-0 h-full bg-secondary flex flex-col justify-between shadow-2xl'>
    <div className='flex flex-col bg-transparent justify-between h-screen pb-[1rem]'>
        <div className='flex flex-col gap-6'>
            <div className='w-full flex items-center justify-center'>
                <img src={images.logo} alt="logo" className='max-w-[4rem]' />
            </div>
            <ul className='flex flex-col gap-2'>
                <NavItems link={'/'} title={'Home'} icon={<AiFillHome />} />
                <NavItems link={'/test'} title={'Take Test'} icon={<PiExamFill />} />
                <NavItems link={'/dashboard'} title={'Dashboard'} icon={<MdDashboard />} />
                <NavItems link={'/leaderboard'} title={'Leaderboard'} icon={<MdLeaderboard />} />
            </ul>
        </div>
        <div className="down">
            <ul>
                <div onClick={showCalc}>
                    <NavItems title={'Calculator'} icon={<ImCalculator />} />
                </div>
                <div className='border border-accent'>
                    <NavItems title={'Profile'} icon={<BsPersonSquare />} />
                </div>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar