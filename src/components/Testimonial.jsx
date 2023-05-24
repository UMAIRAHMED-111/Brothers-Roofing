import { useState } from 'react'
import bgImg from '../assets/House.png'
import { ElfsightWidget } from 'react-elfsight-widget'
import { useEffect } from 'react'

const Testimonial = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

    

  return (
    <div>
      <div className='w-full h-full'>
        <img className='object-cover h-full w-full fixed -z-10 contrast-50' src={bgImg} alt="/" />
      </div>
      <div name='home' className='w-full h-screen text-zinc-900 flex flex-col justify-between pt-[40px]' style={{ animation: "fadeIn 1s ease-in" }}>
      <div className='max-w-[1240px] m-auto'>
      <div className='flex flex-col justify-center items-center text-center md:items-center w-full px-1 md:px-0 py-2'>
                <h1 className='text-4xl md:text-7xl font-bold py-3 px-3'>TESTIMONIALS</h1>
                <p className='md:text-5xl text-2xl font-bold italic py-3 px-3 text-red-600'>Read what our customers have to say about our roofing services.</p>
                
        </div>
      </div>
    </div>
    <div className="py-5 px-10 grid grid-cols-1 gap-8 md:gap-8 bg-gradient-to-b from-white to-gray-200">

    <ElfsightWidget widgetID='a31d531d-5f3c-4348-919d-41e13a4f8bcc' ></ElfsightWidget>
    </div>

    </div>
  )
}

export default Testimonial


