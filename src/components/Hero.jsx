import React from 'react'
import { Link } from 'react-router-dom'
import supportImg from '../assets/bg-trial3.jfif'
import reliable from '../assets/reliable.png'
import customer from '../assets/customer.png'


const Hero = () => {
  return (
    <div>
    <div name='home' className='w-full h-screen text-black-900 flex flex-col justify-crnter py-[100px]' style={{ animation: "fadeIn 1s ease-in" }}>
        <div className='max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center items-center text-center w-full px-2 py-5'>
                <h1 className='text-5xl md:text-7xl font-bold py-3 text-zinc-900'>BROTHER'S ROOFING</h1>
                <h1 className='text-2xl md:text-5xl text-red-600'>CERTIFIED & TRUSTED</h1>
                <p className='md:text-4xl text-2xl italic py-3 text-zinc-900'>Here For All Your Roofing Needs</p>
                <Link to="/contact"><button className='px-8 py-3 mt-[20px] bg-orange-600 text-white font-bold text-2xl'>Get Started</button></Link>
            </div>
            
        </div>
    </div>
    
    <div name='support' className='w-full mt-24 rounded-t-lg'>
    <div className='w-full h-[700px] bg-gray-700 absolute border border-white rounded-md'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              
              <h1 className='text-2xl md:text-5xl font-extrabold text-zinc-800 py-6 text-center'>WHY BROTHER'S ROOFING ?</h1>
              <p className='py-1 text-xl md:text-2xl font-medium text-center'>We have been in the roofing industry for over 15 years. We started from being employees to becoming sales reps to moving up to estimating and then finally decided to open and operate our business. Brother's Roofing is a family run business therefore we take workmanship and quality very serious. Our goal is to provide the prompt and best service possible.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-slate-800'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src={reliable} className='w-16 p-4 bg-orange-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h1 className='font-bold text-2xl my-6'>RELIABLE ROOFING PROFESSIONALS</h1>
                      <p className='text-gray-600 text-md '>As a premier company specializing in residential and commercial roofing services, we are dedicated to providing customer service that is second to none. Whether you have a new construction project or need to replace an old or damaged roof, we offer roofing repair and replacement services.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src={customer} className='w-16 p-4 bg-orange-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h1 className='font-bold text-2xl my-6'>INDIVIDUALIZED ROOFING OPTIONS</h1>
                      <p className='text-gray-600 text-md'>We will provide you with a full consultation to explain all of your available options so that you can choose the roofing plan that’s right for your home or business. We will work with you and adhere to your personal needs.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-16 p-4 bg-orange-400 text-white rounded-lg mt-[-4rem]'>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
</svg>

                      <h1 className='font-bold text-2xl my-6'>CUSTOMER SATISFACTION GUARANTEED</h1>
                      <p className='text-gray-600 text-md'>We strive to save you both time and money by combining our use of roofing knowledge, the highest quality material, and our dedication to delivering exceptional service. We will not leave the job until it is finished and you are satisfied.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>

    

    </div>
  )
}

export default Hero
