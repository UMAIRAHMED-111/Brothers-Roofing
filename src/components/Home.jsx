
import Hero from './Hero';

import bgImg from '../assets/House.png'

import { Link } from 'react-router-dom';

import { useEffect } from 'react';



function Home() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
  
  return (
    <>
      <div className='w-full h-full'>
        <img className='object-cover h-full w-full fixed -z-10 contrast-50' src={bgImg} alt="/" />
      </div>
      <Hero />
      <div name='support' className='w-full h-full mt-12 p-10 bg-gradient-to-r from-gray-100 to-gray-300'>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-6'>
              <h1 className='text-5xl md:text-7xl font-bold py-4 text-center text-slate-900'>SITE LINKS</h1>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl shadow-2xl h-[50vh] md:h-[60vh]'>
                  <div className='p-8 flex flex-col justify-between text-center'>
                      <h1 className='font-bold md:text-5xl text-2xl mt-6'>SERVICES</h1>
                      <p className='text-gray-800 text-md md:text-2xl py-6'>Have a look at the wide range of services we have to offer. Reliable roofing professionals - WSIB Compliant.</p>
                      <div className='flex flex-col justify-between align-middle items-center text-center'>
                      <Link to="/services"><button className='py-3 m-auto px-3 text-2xl bg-orange-600 text-white font-bold w-[220px]'>SERVICES</button></Link>
                      </div>
                  </div>
              </div>
              <div className='bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl shadow-2xl h-[50vh] md:h-[60vh]'>
                  <div className='p-8 flex flex-col justify-between text-center'>
                      <h1 className='font-bold md:text-5xl text-2xl mt-6'>GALLERY</h1>
                      <p className='text-gray-800 text-md md:text-2xl py-6'>Have a look at our completed projects from our image gallery.</p>
                      <div className='flex flex-col justify-between align-middle items-center text-center'>
                      <Link to="/gallery"><button className='py-3 m-auto px-3 text-2xl bg-orange-600 text-white font-bold w-[220px]'>GALLERY</button></Link>
                      </div>
                  </div>
              </div>
              <div className='bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl shadow-2xl h-[50vh] md:h-[60vh]'>
                  <div className='p-8 flex flex-col justify-between text-center'>
                      <h1 className='font-bold md:text-5xl text-2xl mt-6'>TESTIMONIALS</h1>
                      <p className='text-gray-800 text-md md:text-2xl py-6'>See what our customers have to say about our services .</p>
                      <div className='flex flex-col justify-between align-middle items-center text-center'>
                      <Link to="/testimonials"><button className='py-3 m-auto px-3 text-2xl bg-orange-600 text-white font-bold w-[220px]'>TESTIMONIALS</button></Link>
                      </div>
                  </div>
              </div>
              <div className='bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl shadow-2xl h-[50vh] md:h-[60vh]'>
                  <div className='p-8 flex flex-col justify-between text-center'>
                      <h1 className='font-bold md:text-5xl text-2xl mt-6'>CONTACT US</h1>
                      <p className='text-gray-800 text-md md:text-2xl py-6'>Have questions? Reach out to us using our contact form and we will give you a call.</p>
                      <div className='flex flex-col justify-between align-middle items-center text-center'>
                      <Link to="/contact"><button className='py-3 m-auto px-3 text-2xl bg-orange-600 text-white font-bold w-[220px]'>CONTACT US</button></Link>
                      </div>
                  </div>
              </div>    </div>
      </div>
  </div>
  </>
  );
}

export default Home;