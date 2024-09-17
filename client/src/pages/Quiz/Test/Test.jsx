import React, {useState} from 'react';
import ScientificCalculator from '../../../components/MathCalculator/Calculator';

const Test = ({showCalculator, hideCalc}) => {
    const [option, setOption] = useState('');

  return (
    <section className='relative'>
        {showCalculator && <div className='absolute z-50 right-0'>
            <ScientificCalculator hideCalc={hideCalc}/>
        </div>}
        <div className="total-timer w-full flex items-center mb-20 text-gray-300 gap-2">
                <div className='w-[90%] h-[.1rem] bg-white '>
                    <p className='bg-accent h-full w-[60%]'></p>
                </div>
                <small className='text-xs'>01:00:59</small>
            </div>
            <div className="question-box w-full h-fit bg-secondary shadow-2xl relative mb-6 py-16 px-4 text-gray-100 md:px-8 rounded-[1rem]">
                <div className=" absolute top-[-2.5rem] transform -translate-x-1/2 left-1/2 shadow-2xl bg-gray-900 text-gray-400 font-bold flex items-center justify-center counter w-[5rem] h-[5rem] rounded-full border-8 border-primary">1/25</div>
                <p>A survey of a class of thirty graduates showed that five graduated with a
                    distinction, nine graduated with upper credit, fourteen graduated with lower
                    credit and two graduated with a pass. What is the probability that a graduate
                    selected from this group has an upper credit?
                </p>
            </div>
            <div className="options">
                <ul className='flex flex-col space-y-4'>
                    <li onClick={() => setOption('option1')} className={`w-full rounded-[.5rem] border px-4 md:px-6 py-4 hover:border-accent duration-500 cursor-pointer ${option == 'option1' ? 'font-bold text-accent border-accent' : 'text-white border-gray-400'}`}>Option one</li>
                    <li onClick={() => setOption('option2')} className={`w-full rounded-[.5rem] border px-4 md:px-6 py-4 duration-500 cursor-pointer hover:border-accent ${option == 'option2' ? 'font-bold text-accent border-accent' : 'text-white border-gray-400'}`}>Option two</li>
                    <li onClick={() => setOption('option3')} className={`w-full rounded-[.5rem] border px-4 md:px-6 py-4 duration-500 cursor-pointer hover:border-accent ${option == 'option3' ? 'font-bold text-accent border-accent' : 'text-white border-gray-400'}`}>Option two</li>
                    <li onClick={() => setOption('option4')} className={`w-full rounded-[.5rem] border px-4 md:px-6 py-4 duration-500 cursor-pointer hover:border-accent ${option == 'option4' ? 'font-bold text-accent border-accent' : 'text-white border-gray-400'}`}>Option two</li>
                </ul>
            </div>
            <button className="next bg-primary hover:bg-primaryHover w-full rounded-[.5rem] px-4 py-4 text-white mt-10 duration-500">Next Question</button>
    </section>
  )
}

export default Test