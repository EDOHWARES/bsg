import React from 'react'

const QuizPage = () => {
  return (
    <section className='py-2 bg-gray-900 h-fit w-full absolute left-0'>
        <div className='cont w-[80%] mx-auto'>
            <nav className='w-full mb-3'>
                <ul className='grid grid-cols-3 text-center items-center bg-[#800e80] justify-between p-1 h-[3rem] md:h-[4rem] rounded-full text-white'>
                    <li className="etest bg-gray-900 rounded-full h-full flex items-center justify-center cursor-pointer">E-Test</li>
                    <li className='dashboard'>Dashboard</li>
                    <li className='leaderboard'>Leaderboard</li>
                </ul>
            </nav>
            <div className="total-timer w-full flex items-center justify-between mb-20 text-gray-300 gap-4">
                <p className='w-[90%] h-[.2rem] bg-white '>
                    <p className='bg-yellow-600 h-full w-[60%]'></p>
                </p>
                <p className='text-sm'>01:00:59</p>
            </div>
            <div className="question-box w-full h-[20rem] bg-gray-700 shadow-2xl rounded-3xl relative mb-6 py-16 px-4 text-gray-100 md:px-8">
                <div className=" absolute top-[-2.5rem] transform -translate-x-1/2 left-1/2 shadow-2xl bg-gray-900 text-white font-bold flex items-center justify-center counter w-[5rem] h-[5rem] rounded-full bg-transparent border-8 border-[#800e80]">25</div>
                <p>A survey of a class of thirty graduates showed that five graduated with a
 distinction, nine graduated with upper credit, fourteen graduated with lower
 credit and two graduated with a pass. What is the probability that a graduate
 selected from this group has an upper credit?</p>
            </div>
            <div className="options">
                <ul className='flex flex-col space-y-4'>
                    <li className='w-full border border-gray-400 rounded-md px-4 md:px-6 py-4 text-white'>option one</li>
                    <li className='w-full border border-gray-400 rounded-md px-4 md:px-6 py-4 text-white'>option two</li>
                    <li className='w-full border border-gray-400 rounded-md px-4 md:px-6 py-4 text-white'>option two</li>
                    <li className='w-full border border-gray-400 rounded-md px-4 md:px-6 py-4 text-white'>option two</li>
                </ul>
            </div>
            <button className="next bg-[#800e80] w-full px-4 py-4 rounded-md text-white mt-10">Next Question</button>
        </div>
    </section>
  )
}

export default QuizPage