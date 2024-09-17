import React, {useState} from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-[100vh] py-8 mt-[7rem]'>
        <div className="content">
            <form className='border p-4 px-6 rounded-[8px] w-full md:w-[60%] mx-auto'>
                <div className='mb-[2rem] text-center md:text-start'>
                    <h1 className='text-[#171A1FFF] text-[32px] font-bold'>Welcome Back! 🚀</h1>
                    <p className='text-[#9095A0FF] text-sm'>Login your account</p>
                </div>

                <section className='flex flex-col gap-4 mb-[5rem]'>
                    <div className='form-field flex items-center gap-2 h-[44px] border-2 border-transparent hover:border-accent duration-500 bg-[#F3F4F6FF] rounded-[8px] px-4 py-2 w-full '>
                        <MdOutlineEmail className='text-gray-500' />
                        <input className='outline-none w-full h-full border-none bg-transparent focus-within:bg-transparent focus-visible:bg-transparent focus:bg-transparent placeholder:text-sm text-sm text-gray-500' type="email" placeholder='Enter your student email' />
                    </div>
                    <div>
                      <div className='form-field flex items-center gap-2 h-[44px] border-2 border-transparent hover:border-accent duration-500 bg-[#F3F4F6FF] rounded-[8px] px-4 py-2 w-full'>
                          <RiLockPasswordLine className='text-gray-500' />
                          <input className='outline-none w-full h-full border-none bg-transparent focus-within:bg-transparent focus-visible:bg-transparent focus:bg-transparent placeholder:text-sm text-sm text-gray-500' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
                      </div>
                      <Link className='text-sm float-end text-primary'>Forgot Password?</Link>
                    </div>
                    <button className='bg-primary hover:bg-primaryHover duration-500 text-white py-2 px-4 rounded-[8px]'>Login</button>
                </section>

                <p className='text-center text-[#9095A0FF]'>Don't have an account ? <Link to={'/auth/signup'} className='text-primary hover:text-primaryHover duration-500 cursor-pointer font-semibold'>Sign up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login