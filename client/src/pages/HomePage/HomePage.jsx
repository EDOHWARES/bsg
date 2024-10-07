import React, { useState } from 'react';
import { FaFilePdf } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { SiTestcafe } from "react-icons/si";




const Card = ({icon, title, text, service, activeService, setActiveService}) => {

  return (
    <div onClick={() => setActiveService(service)} className={`${activeService == service ? 'bg-primary' : 'bg-white' } shadow-2xl rounded-[8px] p-6 cursor-pointer h-[10rem] w-[20rem] border border-primary text-left flex flex-col gap-[1rem] hover:border-accent duration-500`}>
      <div className='flex items-center gap-[1rem]'>
        <span className={`w-[1.5rem] h-[1.5rem] flex items-center justify-center ${activeService == service ? 'bg-white' : 'bg-gray-300'}`}>{icon}</span>
        <h2 className={`text-[20px] font-bold ${activeService == service ? 'text-white' : 'text-[#101828]'}`}>{title}</h2>
      </div>
      <p className={`text-left text-[14px] ${activeService == service ? 'text-gray-200' : 'text-[#646464]'}`}>{text}</p>
    </div>
  )
}

const HomePage = () => {
  const [activeService, setActiveService] = useState('freePDFs');
  return (
    <div className='min-h-[100vh] py-8 mt-[9rem]'>
      <div className='content flex flex-col items-center gap-[10rem]'>
        <div className="text-center text-[#646464]">
          <h1 className='text-5xl font-semibold text-[#101828]'>All in one platform to boost your <br className='hidden md:block' /> academic performance</h1>
          <p className='mt-[1rem]'>Free to use. Easy to try. Just get started.</p>
          <p>BSG focuses on providing you with upto-date info and an avenue to practice for <br /> upcoming tests and exams with well sorted data.</p>
          <button className='bg-primary px-4 py-2 text-white mt-[2rem] rounded-[8px] hover:scale-105 duration-500'>Visit BSG ROOM</button>
        </div>

        <div className='text-center flex flex-col gap-10'>
          <div>
            <p className='text-primary font-semibold text-[16px]'>Services</p>
            <p className='text-[#101828] font-semibold text-[30px] leading-[2.6rem]'>Fostering an educative and helpful <br /> environment</p>
          </div>
          <div className='grid grid-cols-3 items-center gap-[3rem] justify-between'>
            <Card 
              title={'Free Study PDFs'}
              text={'We provide you with free authentic past questions and answers in PDFs form.'}
              icon={<FaFilePdf />}
              service={'freePDFs'}
              activeService={activeService}
              setActiveService={setActiveService}
            />
            <Card 
            title={'News and Updates'}
            text={'We also provide you with prompt news and updates within the institution and with-out.'}
            icon={<FaNewspaper />}
            service={'news'}
            activeService={activeService}
            setActiveService={setActiveService}
            />
            <Card 
            title={'Test Room'}
            text={'We grant you free access to the BSG-ROOM, where you can test yourself with past questions and answers.'}
            icon={<SiTestcafe />}
            service={'test'}
            activeService={activeService}
            setActiveService={setActiveService}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage