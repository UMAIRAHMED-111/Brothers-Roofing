
import bgImg from '../assets/House.png'
import { Link } from 'react-router-dom';
import chimney from '../assets/chimney.png'
import inspect from '../assets/inspect.png'
import repair from '../assets/repair.png'
import estimation from '../assets/estimation.png'
import a from '../assets/logoa.png'
import b from '../assets/logob.png'
import c from '../assets/logoc.jpg'
import d from '../assets/logod.png'
import { useEffect } from 'react';




function Services() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='w-full h-full'>
        <img className='object-cover mix-blend-overlay h-full w-full fixed -z-10 contrast-50' src={bgImg} alt="/" />
      </div>
      <div name='home' className='w-full h-screen text-zinc-900 flex flex-col justify-between py-[20px]' style={{ animation: "fadeIn 1s ease-in" }}>
      <div className='max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center items-center text-center md:items-center w-full px-1 md:px-0 py-2'>
                <h1 className='text-4xl md:text-7xl font-bold py-3'>SERVICES</h1>
                <p className='md:text-5xl text-2xl font-bold italic py-3 text-red-700'>Have a look at the services we have to offer.</p>
                
        </div>
      </div>
    </div>
      <div name='support' className='w-full mt-5 rounded-t-lg bg-gradient-to-r from-gray-100 to-gray-300'>
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-slate-800'>
              <div className='bg-white rounded-xl shadow-2xl hover:opacity-75'>
                  <div className='p-8'>
                  <img src={inspect} className='w-16 p-4 bg-orange-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>Roof Inspections</h3>
                      <p className='text-gray-600 text-xl'>From consulting the problems to repairing them or to install new
roof, we offer the right roofing services you're looking for.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:opacity-75'>
                  <div className='p-8'>
                  <img src={estimation} className='w-16 p-4 bg-orange-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>Consultation & Estimations</h3>
                      <p className='text-gray-600 text-xl'>Tell us what you're looking for and we'll pair you with
the services you need.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:opacity-75'>
                  <div className='p-8'>
                  <img src={repair} className='w-16 p-4 bg-orange-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>Repairs, Full Replacement, Installations</h3>
                      <p className='text-gray-600 text-xl'>We'll help you add beauty and value to
your home with your new roof.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl hover:opacity-75'>
                  <div className='p-8'>
                  <img src={chimney} className='w-16 p-4 bg-orange-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>Chimney Repairs & Removals</h3>
                      <p className='text-gray-600 text-xl'>We inspect chimneys, repair or remove them below
roof level to ensure you leak precautions or put a stop for the bricks fall.</p>
                  </div>
              </div>
          </div>
          <div className='mt-[100px]'>
              <h2 className='md:text-5xl text-4xl font-bold text-slate-900 py-5 text-center mb-8'>OUR PRODUCTS</h2>
          <div className='grid grid-cols-4 m-auto'>
            <img className='w-[12vw] ml-5 md:ml-[68px]' src={a}></img>
            <img className='w-[100vw] ml-3 md:ml-[65px]' src={b}></img>
            <img className='w-[12vw] ml-3 md:ml-[95px]' src={c}></img>
            <img className='w-[15vw] ml-3 md:ml-[65px]' src={d}></img>

          </div>
          </div>
          </div>

          
      </div>
      </div>
      </div>

);
}

export default Services;




