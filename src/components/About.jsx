import React from 'react'
import bgImg from '../assets/support.jpg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div name='services' className='w-full md:mb-[300px] my-[250px]'>
      <div className='w-full h-[600px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt="/" />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12 flex flex-col justify-center items-center'>
          <h3 className='text-6xl font-bold py-6 text-center'>Services We Provide</h3>
          <p className='py-6 text-2xl md:text-3xl text-slate-200'>
            Select from our wide range of services. Reliable roofing professionals WSIB Compliant.
          </p>
          <Link to="/services"><button className='px-8 py-3 mt-[50px] bg-orange-600 text-white font-bold text-2xl'>Services</button></Link>
        </div>
      </div>
    </div>
  );
};


export default About;