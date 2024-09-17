import React, { useState } from 'react';
import { images } from '../../../assets/assets';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import VerifyEmail from './VerifyEmail';
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const Signup = () => {

    const [showVerifyEmailModal, setShowVerifyEmailModal] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-[100vh] py-8 mt-[7rem]'>
        {showVerifyEmailModal && <VerifyEmail hideModal={() => setShowVerifyEmailModal(false)} />}
        <div className="content">
            <form className='border p-4 px-6 rounded-[8px] w-full md:w-[60%] mx-auto'>
                <div className='mb-[2rem] text-center md:text-start'>
                    <h1 className='text-[#171A1FFF] text-[32px] font-bold'>Let's Get Started 🚀</h1>
                    <p className='text-[#9095A0FF] text-sm'>Sign up your account</p>
                </div>

                <section className='flex flex-col gap-4 mb-[5rem]'>
                    <div className='form-field flex items-center gap-2 h-[44px] border-2 border-transparent hover:border-accent duration-500 bg-[#F3F4F6FF] rounded-[8px] px-4 py-2 w-full '>
                        <MdOutlineEmail className='text-gray-500' />
                        <input className='outline-none w-full h-full border-none bg-transparent focus-within:bg-transparent focus-visible:bg-transparent focus:bg-transparent placeholder:text-sm text-sm text-gray-500' type="email" placeholder='Enter your student email' />
                    </div>
                    <div className='form-field flex items-center gap-2 h-[44px] border-2 border-transparent hover:border-accent duration-500 bg-[#F3F4F6FF] rounded-[8px] px-4 py-2 w-full'>
                        <RiLockPasswordLine className='text-gray-500' />
                        <input className='outline-none w-full h-full border-none bg-transparent focus-within:bg-transparent focus-visible:bg-transparent focus:bg-transparent placeholder:text-sm text-sm text-gray-500' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
                    </div>
                    <button className='bg-primary hover:bg-primaryHover duration-500 text-white py-2 px-4 rounded-[8px]'>Continue</button>
                    <div>
                        <p className='text-[#9095A0FF] text-center text-sm'>By continuing you agree to our <br /> <span className='text-gray-700 font-semibold'>Terms</span> & <span className='text-gray-700 font-semibold'>Conditions</span> and <span className='text-gray-700 font-semibold'>Privacy Policy</span></p>
                    </div>
                </section>

                <p className='text-center'>Already have an account ? <Link to={'/auth/login'} className='text-primary hover:text-primaryHover duration-500 cursor-pointer font-semibold'>Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signup