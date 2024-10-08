import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../Quiz/Dashboard/Dashboard';
import Leaderboard from '../Quiz/Leaderboard/Leaderboard';
import Test from '../Quiz/Test/Test';
import Error from '../ErrorPage/Error';
import RoomHome from '../RoomHome/RoomHome';

const Room = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  return (
    <section className='bg-gray-900 min-h-screen h-fit w-full absolute left-0 pr-10'>
    <div className='cont  mx-auto flex flex-row justify-between gap-10'>
      <div className='w-[12%]'>
        <Navbar showCalc={() => setShowCalculator(true)} />
      </div>
        <div className='py-10 w-[88%]'>
            <Routes>
                <Route path='/' element={<RoomHome/>} />
                <Route path='/test' element={<Test showCalculator={showCalculator} hideCalc={() => setShowCalculator(false)} />} /> 
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    </div>
</section>
  )
}

export default Room;