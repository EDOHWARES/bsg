import React from 'react';
import { GiDiamondTrophy } from "react-icons/gi";
import { HiMiniTrophy } from "react-icons/hi2";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdOutlineBatchPrediction } from "react-icons/md";

const StatBox = ({amt, title}) => {
    return (
        <div className='bg-secondary h-[9rem] rounded-md text-white p-2 text-start flex flex-col items-center justify-center hover:scale-[98%] duration-500'>
            <h1 className='font-bold text-2xl'>{amt}</h1>
            <p className='text-gray-400'>{title}</p>
        </div>
    )
};

const Participant = ({icon, position, name, score, timeTaken}) => {
    return (
        <ul className='grid grid-cols-[4fr_1fr_1fr] p-3 text-gray-300 text-sm border border-t-transparent border-primary'>
            <li className='flex items-center gap-4'>
                <p className='text-xl'>{icon}</p>
                <p className='text-accent'>{position}</p>
                <p className='font-semibold'>{name}</p>
            </li>
            <li>
                {score}
            </li>
            <li>{timeTaken}</li>
        </ul>
    )
};

const Leaderboard = () => {
  return (
    <div className='text-white flex flex-col gap-6 mt-[2rem]'>
        <div className="actions flex items-center justify-end w-full gap-4">
            <select name="" id="" className='text-black py-2 p-4 rounded-[8px]'>
                <option value="">Select course</option>
                <option value="">MTH 101</option>
                <option value="">Stat 101</option>
            </select>
            <button className='bg-accent px-4 py-2 rounded-[8px]'>Export as PDF</button>
        </div>
        <div className="stats grid items-center grid-cols-4 gap-4">
            <StatBox amt='311' title='Number of participants'/>
            <StatBox amt='3.1' title='Average score'/>
            <StatBox amt='39/40' title='Highest score'/>
            <StatBox amt='1' title='Participant with highest score'/>
        </div>
        <div className="board flex flex-col gap-3">
            <h3 className='text-accent font-semibold tex'>Leaderboard</h3>
            <div className='flex flex-col'>
                <ul className="hd grid grid-cols-[4fr_1fr_1fr] bg-secondary p-3 border border-primary border-b-transparent">
                    <li>Participants</li>
                    <li>Score</li>
                    <li>Time Taken</li>
                </ul>
                <div>
                    <Participant 
                        icon={<GiDiamondTrophy className='text-accent'/>}
                        position={'1st'}
                        name={'Anita Jim'}
                        score={'39/40'}
                        timeTaken={'40mins'}
                    />
                    <Participant 
                        icon={<HiMiniTrophy className='text-accent'/>}
                        position={'2nd'}
                        name={'Mohmmad Salih'}
                        score={'30/40'}
                        timeTaken={'50mins'}
                    />
                    <Participant 
                        icon={<GiLaurelsTrophy className='text-accent'/>}
                        position={'3rd'}
                        name={'Benjamin Carson'}
                        score={'29/40'}
                        timeTaken={'44mins'}
                    />
                    <Participant 
                        icon={<MdOutlineBatchPrediction className='text-accent'/>}
                        position={'4th'}
                        name={'Linda Alex'}
                        score={'27/40'}
                        timeTaken={'30mins'}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Leaderboard