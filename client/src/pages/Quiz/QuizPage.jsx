import React, { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Test from './Test/Test';
import Dashboard from './Dashboard/Dashboard';
import Leaderboard from './Leaderboard/Leaderboard';

const QuizPage = () => {

    const [navState, setNavState] = useState('etest');
    
  return (
    <section className='py-2 bg-gray-900 min-h-screen h-fit w-full absolute left-0'>
        <div className='cont w-[95%] md:w-[80%] mx-auto'>
            <nav className='w-full mb-3'>
                <ul className='grid grid-cols-3 text-center items-center bg-primary justify-between p-1 h-[3rem] md:h-[4rem] rounded-full text-white'>
                    <Link to={'test'} onClick={() => setNavState('etest')} className={`etest hover:bg-gray-900 ${navState == 'etest' ? 'bg-gray-900' : ''} rounded-full h-full flex items-center justify-center cursor-pointer duration-500`}>E-Test</Link>
                    <Link to={'dashboard'} onClick={() => setNavState('dashboard')} className={`dashboard hover:bg-gray-900 ${navState == 'dashboard' ? 'bg-gray-900' : ''} rounded-full h-full flex items-center justify-center cursor-pointer duration-500`}>Dashboard</Link>
                    <Link to={'leaderboard'} onClick={() => setNavState('leaderboard')} className={`leaderboard hover:bg-gray-900 ${navState == 'leaderboard' ? 'bg-gray-900' : ''} rounded-full h-full flex items-center justify-center cursor-pointer duration-500`}>Leaderboard</Link>
                </ul>
            </nav>

            <Routes>
                <Route path='/test' element={<Test />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
            </Routes>
        </div>
    </section>
  )
}

export default QuizPage