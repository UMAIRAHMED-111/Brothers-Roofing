import { useForm } from 'react-hook-form';
import bgImg from '../assets/House.png'
import 'react-phone-number-input/style.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useEffect } from 'react';



function Contact() {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm("service_umqgz4i", "template_0j7rzpf", form.current, "k-rKqfxnHDaVbzWtv")
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Reset the form after successful submission
          setShowAlert(true); // Set the state to display the alert
          setTimeout(() => {
            setShowAlert(false); // Hide the alert message after 2 seconds
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  return (
    <div>
      
      <div className='w-full h-full'>
        <img className='object-cover h-full w-full fixed -z-10 contrast-50' src={bgImg} alt="/" />
      </div>
      <div name='home' className='w-full h-screen text-zinc-900 flex flex-col justify-between pt-[40px]' style={{ animation: "fadeIn 1s ease-in" }}>
      <div className='max-w-[1240px] m-auto'>
      <div className='flex flex-col justify-center items-center text-center md:items-center w-full px-1 md:px-0 py-2'>
                <h1 className='text-4xl md:text-7xl font-bold py-3 px-3'>CONTACT US</h1>
                <p className='md:text-5xl text-2xl font-bold italic py-3 px-3 text-red-600'>Have questions about our products or services? Fill the form below, we’d love to here from you.</p>
                
        </div>
      </div>
    </div>
    <div className='w-full h-full mt-12 p-7 bg-gradient-to-r from-gray-100 to-gray-300'>
    {showAlert && (
        <div className="alert bg-green-100 border rounded-md border-green-500 text-green-700 px-4 py-3 md:w-[49%]" role="alert">
          <p className="font-bold text-md">Email
has successfully sent, we will get to you shortly.
</p>
          
        </div>
      )}
    <div className="py-2 px-2 my-2 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 bg-gradient-to-r from-gray-200 to-gray-200 p-2 border rounded-sm border-gray-300 outline-6">
        <h1 className='m-auto text-2xl md:text-3xl font-semibold text-slate-800'>Get in touch!</h1>
        <p className='italic text-md md:text-xl font-normal text-slate-700'>Please fill out the form as completely as possible and we’ll be in touch by the end of the business day to discuss details and provide you with a quote.</p>
        <div className="flex flex-col">
      <input className="p-1 outline-none border rounded-md focus:border-zinc-500" type="text" name="user_name" placeholder='Name:' required/>
        </div>
        <input className="p-1 outline-none border rounded-md focus:border-zinc-500" name='user_number' type="tel" placeholder="Mobile Number:" required/>
        <div className="flex flex-col">
      <input className="p-1 outline-none border rounded-md focus:border-zinc-500" type="email" name="user_email" placeholder='Email:' required/>
        </div>
        <div className="flex flex-col">
      <input className="p-1 outline-none border rounded-md focus:border-zinc-500" type="text" name="user_address" placeholder='Address: (Optional)'/>
        </div>
        <div className="flex flex-col">
        <input
            className="p-1 outline-none border rounded-md focus:border-zinc-500"
            placeholder='Subject:'
            name='user_subject'
            required
          />        </div>
        <div className="flex flex-col">
      <textarea rows={4} name="message" placeholder='Your Message:' className="p-1 outline-none border rounded-md focus:border-zinc-500"/>
        </div>
      


<button className='px-8 py-3 bg-orange-600 text-white font-bold'><input type="submit" /></button>
      </form>

<div className='flex flex-col justify-between align-middle items-center text-center'>
      <iframe
      className='w-[82vw] md:w-[45vw] h-[80vh] border rounded-md '
      title="Google Map"
      width="90%"
      height="450"
      frameBorder="0"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11588.054694154938!2d-80.485018!3d43.4394304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe36ede7de045efbf!2sBrother&#39;s%20Roofing!5e0!3m2!1sen!2s!4v1675662078980!5m2!1sen!2s"
      allowFullScreen
    />
    </div>
      
      
    </div>
    </div>

    </div>
  );
}

export default Contact;