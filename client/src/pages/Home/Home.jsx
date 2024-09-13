import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../Quiz/Dashboard/Dashboard';
import Leaderboard from '../Quiz/Leaderboard/Leaderboard';
import Test from '../Quiz/Test/Test';
import HomePage from '../HomePage/HomePage';

const Home = () => {
  return (
    <section className='bg-gray-900 min-h-screen h-fit w-full absolute left-0 pr-10'>
    <div className='cont  mx-auto flex flex-row justify-between gap-10'>
      <div className='w-[12%]'>
        <Navbar />
      </div>
        <div className='py-10 w-[88%]'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/test' element={<Test />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
            </Routes>
        </div>
    </div>
</section>
  )
}

export default Home