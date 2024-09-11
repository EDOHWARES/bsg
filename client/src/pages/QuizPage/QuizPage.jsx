import React, { useState } from 'react'

const QuizPage = () => {

    const [navState, setNavState] = useState('etest');
    const [option, setOption] = useState('');
    
  return (
    <section className='py-2 bg-gray-900 min-h-screen h-fit w-full absolute left-0'>
        <div className='cont w-[95%] md:w-[80%] mx-auto'>
            <nav className='w-full mb-3'>
                <ul className='grid grid-cols-3 text-center items-center bg-[#800e80] justify-between p-1 h-[3rem] md:h-[4rem] rounded-full text-white'>
                    <li onClick={() => setNavState('etest')} className={`etest hover:bg-gray-900 ${navState == 'etest' ? 'bg-gray-900' : ''} rounded-full h-full flex items-center justify-center cursor-pointer duration-500`}>E-Test</li>
                    <li onClick={() => setNavState('dashboard')} className={`dashboard hover:bg-gray-900 ${navState == 'dashboard' ? 'bg-gray-900' : ''} rounded-full h-full flex items-center justify-center cursor-pointer duration-500`}>Dashboard</li>
                    <li onClick={() => setNavState('leaderboard')} className={`leaderboard hover:bg-gray-900 ${navState == 'leaderboard' ? 'bg-gray-900' : ''} rounded-full h-full flex items-center justify-center cursor-pointer duration-500`}>Leaderboard</li>
                </ul>
            </nav>
            <div className="total-timer w-full flex items-center mb-20 text-gray-300 gap-2">
                <p className='w-[90%] h-[.2rem] bg-white '>
                    <p className='bg-yellow-500 h-full w-[60%]'></p>
                </p>
                <p className='text-sm'>01:00:59</p>
            </div>
            <div className="question-box w-full h-fit md:h-[20rem] bg-gray-700 shadow-2xl rounded-3xl relative mb-6 py-16 px-4 text-gray-100 md:px-8">
                <div className=" absolute top-[-2.5rem] transform -translate-x-1/2 left-1/2 shadow-2xl bg-gray-900 text-gray-400 font-bold flex items-center justify-center counter w-[5rem] h-[5rem] rounded-full bg-transparent border-8 border-[#800e80]">25</div>
                <p>A survey of a class of thirty graduates showed that five graduated with a
 distinction, nine graduated with upper credit, fourteen graduated with lower
 credit and two graduated with a pass. What is the probability that a graduate
 selected from this group has an upper credit?</p>
            </div>
            <div className="options">
                <ul className='flex flex-col space-y-4'>
                    <li onClick={() => setOption('option1')} className={`w-full border border-gray-400 rounded-md px-4 md:px-6 py-4 text-white hover:scale-95 hover:border-yellow-500 duration-500 cursor-pointer ${option == 'option1' ? 'font-bold text-yellow-500 border-yellow-500' : ''}`}>Option one</li>
                    <li onClick={() => setOption('option2')} className={`w-full border border-gray-400 rounded-md px-4 md:px-6 py-4 text-white hover:scale-95 duration-500 cursor-pointer hover:border-yellow-500 ${option == 'option2' ? 'font-bold text-yellow-500 border-yellow-500' : ''}`}>Option two</li>
                    <li onClick={() => setOption('option3')} className={`w-full border border-gray-400 rounded-md px-4 md:px-6 py-4 text-white hover:scale-95 duration-500 cursor-pointer hover:border-yellow-500 ${option == 'option3' ? 'font-bold text-yellow-500 border-yellow-500' : ''}`}>Option two</li>
                    <li onClick={() => setOption('option4')} className={`w-full border border-gray-400 rounded-md px-4 md:px-6 py-4 text-white hover:scale-95 duration-500 cursor-pointer hover:border-yellow-500 ${option == 'option4' ? 'font-bold text-yellow-500 border-yellow-500' : ''}`}>Option two</li>
                </ul>
            </div>
            <button className="next bg-[#800e80] hover:bg-[#5e135e] w-full px-4 py-4 rounded-md text-white mt-10 duration-500">Next Question</button>
        </div>
    </section>
  )
}

export default QuizPage