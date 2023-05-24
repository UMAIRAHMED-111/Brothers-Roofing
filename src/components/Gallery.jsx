import { useState } from 'react'
import bgImg from '../assets/House.png'
import {
  FaFacebook
} from 'react-icons/fa'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

import './Gallery.css'

const Gallery = ({galleryImages}) => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }



  return (
    <div>
      <div className='w-full h-full'>
        <img className='object-cover h-full w-full fixed -z-10 contrast-50' src={bgImg} alt="/" />
      </div>
      <div name='home' className='w-full h-screen text-zinc-900 flex flex-col justify-between py-[20px]' style={{ animation: "fadeIn 1s ease-in" }}>
      <div className='max-w-[1240px] m-auto'>
      <div className='flex flex-col justify-center items-center text-center md:items-center w-full px-1 md:px-0 py-2'>
                <h1 className='text-4xl md:text-7xl font-bold py-3'>IMAGE GALLERY</h1>
                <p className='md:text-5xl text-2xl font-bold italic py-3 text-red-700'>Have a look at our completed projects below.</p>
                
        </div>
      </div>
    </div>
    <div className='w-full h-full mt-12 p-10 bg-gradient-to-r from-gray-100 to-gray-300'>
      
      
      {openModal && 
        <div className='sliderWrap '>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
}

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} className="w-[300px]" alt='' />
              </div>
            )
          })
        }
      </div>

      

    </div>
    </div>
  )
}

export default Gallery