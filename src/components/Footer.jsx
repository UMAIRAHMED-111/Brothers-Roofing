import React from 'react'
import logo from '../assets/logo.png'


import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full pt-[100px] text-[#1e212b]-300 py-y px-2 bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col justify-center'>
        
        <div>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 border-t-2 border-b-2 border-gray-600 py-8'>
        
            <div className='flex flex-col justify-between items-center text-center'>
                <img className='w-[150px]' src={logo}></img>
                <h1 className='font-bold uppercase pt-2 text-red-800 md:text-2xl text-xl font-extrabold'>INFORMATION</h1>
                <h1 className='font-bold uppercase pt-2 text-zinc-900 md:text-2xl text-xl font-extrabold'>BROTHER'S ROOFING</h1>
                <p className='font-bold uppercase pt-2 text-zinc-900 md:text-xl text-md'>249 Courtland Ave East # 8 Kitchener, ON N2G 2V6</p>
                <h2 className='uppercase pt-2 text-zinc-900 md:text-xl text-md'>226-789-4788 (Cell)</h2>
                <h2 className='uppercase pt-2 text-zinc-900 md:text-xl text-md'>519-404-8404 (Office)</h2>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='font-bold uppercase pt-4 text-red-800 md:text-2xl text-xl font-bold'>HOURS</h1>
                <div>
                <p className='uppercase pt-2 text-zinc-900 md:text-xl text-md'> Monday              : 8am - 8pm</p>
                <p className='uppercase pt-2 text-zinc-900 md:text-xl text-md'>Tuesday             : 8am - 8pm</p>
                <p className='uppercase pt-2 text-zinc-900 md:text-xl text-md'> Wednesday           : 8am - 8pm</p>
                <p className='uppercase pt-2 text-zinc-900 md:text-xl text-md'>Thursday            : 8am - 8pm</p>
                <p className='uppercase pt-2 text-zinc-900 md:text-xl text-md'>Friday              : 8am - 8pm</p>
                <p className='uppercase pt-2 text-zinc-900 md:text-xl text-md'>Saturday            : 8am - 8pm</p>
                <p className='uppercase pt-2 text-zinc-900 md:text-xl text-md'>Sunday              : 8am - 8pm</p>
            </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold uppercase pt-4 text-red-800 md:text-2xl text-xl font-bold'>Quick Links</h1>
                <ul>
                    <li className='hover:bg-slate-600 hover:text-white font-medium rounded-md cursor-pointer pt-2 text-zinc-900 md:text-xl text-md'><Link aria-current="page" to="/" smooth={true} duration={500}>Home</Link></li>
                    <li className='hover:bg-slate-600 hover:text-white font-medium rounded-md cursor-pointer pt-2 text-zinc-900 md:text-xl text-md'><Link aria-current="page" to="/services" smooth={true} duration={500}>Services</Link></li>
                    <li className='hover:bg-slate-600 hover:text-white font-medium rounded-md cursor-pointer pt-2 text-zinc-900 md:text-xl text-md'><Link aria-current="page" to="/testimonial" smooth={true} duration={500}>Testimonials</Link></li>
                    <li className='hover:bg-slate-600 hover:text-white font-medium rounded-md cursor-pointer pt-2 text-zinc-900 md:text-xl text-md'><Link to="/gallery" smooth={true} duration={500}>Gallery</Link></li>
                    <li className='hover:bg-slate-600 hover:text-white font-medium rounded-md cursor-pointer pt-2 text-zinc-900 md:text-xl text-md'><Link to="/contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>
            </div>
        </div>

        <div className='flex flex-row max-w-[1240px] px-2 py-4 mx-auto justify-between text-center text-gray-700'>
        <p className='py-4 px-2'>Copyright Ⓒ Brother’s Roofing. Ontario, Canada.</p>
        <div className='flex flex-row-reverse p-4 text-3xl'>
            <a href='https://www.facebook.com/people/Brothers-Roofing/100057297705899/?ref=page_internal'><FaFacebook /></a>
        </div>
        </div>
    </div>
  )
}

export default Footer