import React from "react";
import { images } from "../../../assets/assets";
import { IoDiamondSharp } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

import { GiDiamondTrophy } from "react-icons/gi";
import { HiMiniTrophy } from "react-icons/hi2";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdOutlineBatchPrediction } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";

const RecentActivity = ({ course, score, timeTaken}) => {
    return (
        <ul className='grid grid-cols-[4fr_1fr_1fr] p-3 text-gray-300 text-sm text-center border border-t-transparent border-primary cursor-pointer hover:bg-primaryHover duration-500'>
            <li className='flex items-center gap-4'>
                <MdLibraryBooks className="text-accent"/>
                <p className='font-semibold'>{course}</p>
            </li>
            <li>
                {score}
            </li>
            <li className="text-end">{timeTaken}</li>
        </ul>
    )
};

const Dashboard = () => {
  return (
    <section className="w-full">
      <div className="top w-full">
        <div></div>
      </div>
      <div className="btm">
        <div className="src flex items-center gap-4">
          <div className="form-field flex items-center gap-2 h-[44px] border-2 border-transparent hover:border-accent duration-500 bg-[#F3F4F6FF] rounded-[8px] px-4 py-2 w-full">
            <FiSearch className="text-gray-500" />
            <input
              className="outline-none w-full h-full border-none bg-transparent focus-within:bg-transparent focus-visible:bg-transparent focus:bg-transparent placeholder:text-sm text-sm text-gray-500"
              type="search"
              placeholder="Search courses"
            />
          </div>
          <div className="bg-[#F3F4F6FF] h-[44px] w-[44px] rounded-[8px] text-xl flex items-center justify-center text-gray-500 hover:bg-[#e7e7e7] duration-500 cursor-pointer">
            <LuSettings2 />
          </div>
        </div>
        <div className="mt-[2rem]">
            <h1 className='text-gray-300 text-xl font-semibold'>Recent Activites</h1>
            <p className="text-gray-300 text-sm">Click course to see more details</p>
            <div className='flex flex-col mt-[.7rem]'>
                <ul className="hd text-sm md:text-base grid grid-cols-[4fr_1fr_1fr] bg-secondary p-3 border text-gray-300 border-primary border-b-transparent">
                    <li>Course</li>
                    <li className=" text-center">Avg. Performance</li>
                    <li className="text-end">Time Taken</li>
                </ul>
                <div>
                    <RecentActivity
                        icon={<GiDiamondTrophy className='text-accent'/>}
                        position={'1st'}
                        name={'Anita Jim'}
                        score={'80%'}
                        timeTaken={'40mins'}
                        course={'MTH 102'}
                    />
                    <RecentActivity
                        icon={<HiMiniTrophy className='text-accent'/>}
                        position={'2nd'}
                        name={'Mohmmad Salih'}
                        score={'20%'}
                        timeTaken={'50mins'}
                        course={'STAT 123'}
                    />
                    <RecentActivity
                        icon={<GiLaurelsTrophy className='text-accent'/>}
                        position={'3rd'}
                        name={'Benjamin Carson'}
                        score={'50%'}
                        timeTaken={'44mins'}
                        course={'GST 111'}
                    />
                    <RecentActivity
                        icon={<MdOutlineBatchPrediction className='text-accent'/>}
                        position={'4th'}
                        name={'Linda Alex'}
                        score={'98%'}
                        timeTaken={'30mins'}
                        course={'CPT 122'}
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
