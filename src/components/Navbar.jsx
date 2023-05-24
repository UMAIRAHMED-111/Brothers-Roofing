import React, {useState} from 'react';
// import { Link, animateScroll as scroll, } from 'react-scroll'
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-gradient-to-r from-gray-100 to-gray-300 text-black fixed drop-shadow-md'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex it'>
        <Link to="/"><img className='w-[130px] mx-[10px]' src={logo} alt='/' /></Link>
          
        </div>
        <div className='hidden md:flex pr-4'>
        <ul className='hidden md:flex'>
          <li className='hover:bg-slate-500 hover:text-white hover:rounded-md'><Link aria-current="page" to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='hover:bg-slate-500 hover:text-white hover:rounded-md'><Link to="/services" smooth={true} offset={-200} duration={500}>Services</Link></li>
          <li className='hover:bg-slate-500 hover:text-white hover:rounded-md'><Link to="/testimonial" smooth={true} offset={-50} duration={500}>Testimonial</Link></li>
          <li className='hover:bg-slate-500 hover:text-white hover:rounded-md'><Link to="/gallery" smooth={true} offset={-100} duration={500}>Gallery</Link></li>
          <li className='hover:bg-slate-500 hover:text-white hover:rounded-md mr-2'><Link to="/contact" smooth={true} offset={-50} duration={500}>Contact Us</Link></li>
          </ul><Link to="/contact"><button className='p-3 px-7  bg-orange-500 hover:bg-orange-400 hover:border-orange-600 border-orange-700 text-white text-md'>Get Started</button></Link>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-gradient-to-r from-gray-100 to-gray-300 text-black w-full px-8'}>
          <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose} to="/services" smooth={true} offset={-200} duration={500}>Services</Link></li>
          <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose} to="/testimonial" smooth={true} offset={-50} duration={500}>Testimonial</Link></li>
          <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose} to="/gallery" smooth={true} offset={-100} duration={500}>Gallery</Link></li>
          <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose} to="/contact" smooth={true} offset={-50} duration={500}>Contact Us</Link></li>

        <div className='flex flex-col my-4'>
        <Link to="/contact"><button className='p-3  bg-orange-500 hover:bg-orange-400 hover:border-orange-600 border-orange-700 text-white text-md'>Get Started</button></Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
