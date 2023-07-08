import {   FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
 const form=useRef();
 const sendEmail=event=>{
  event.preventDefault();
  emailjs.sendForm('service_hjrkgfe', 'template_wcff4ng', form.current, 'du87gspek9dBancbI')
  .then((result) => {
      console.log(result.text);
      console.log('message sent')
  }, (error) => {
      console.log(error.text);
  });
 }
 return (
  <div className="grid grid-cols-6 mt-16">
   <div className="col-span-2">
    <h2 className="text-3xl font-bold text-white uppercase mb-5">Contact Info</h2>
  <div className="flex gap-4 items-center">
  <IoMailOutline size={80} className="bg-[#181818] p-5 border border-[#343434] rounded-2xl text-white"></IoMailOutline>
   <div className="text-[#c6c6c6] font-sans">
   <h2 className="text-2xl uppercase text-[#464646]">Mail Me</h2>
   <p>mirnaiem18teen@gmail.com</p>
   <p>mirnaiem8teen@gmail.com</p>
   </div>
  </div>
  <div className="flex gap-4 items-center mt-10">
  <FaPhone size={80} className="bg-[#181818] p-5 border border-[#343434] rounded-2xl text-white"></FaPhone>
   <div className="text-[#c6c6c6] font-sans">
   <h2 className="text-2xl uppercase text-[#464646]">Contact Me</h2>
   <p>+88 01736-806881</p>
   <p>+88 01840-009017</p>
   </div>
  </div>
  <div className="flex gap-4 items-center mt-10">
  <GoLocation size={80} className="bg-[#181818] p-5 border border-[#343434] rounded-2xl text-white"></GoLocation>
   <div className="text-[#c6c6c6] font-sans">
   <h2 className="text-2xl uppercase text-[#464646]">Location</h2>
   <p>Rajshahi University, Motihar</p>
   <p>Rajshahi</p>
   </div>
  </div>
  <h2 className="text-3xl font-bold text-white uppercase mt-10 mb-4">social Info</h2>

  <div className="flex gap-4">
   <Link to='https://www.linkedin.com/in/mir-nayeem-hasan-464752226/'><FaLinkedin size={60} className="bg-[#252525] p-4 border border-[#343434] rounded-full text-white"></FaLinkedin></Link>
   <Link to='https://github.com/mirnaiem?tab=repositories'><FaGithub size={60} className="bg-[#252525] p-4 border border-[#343434] rounded-full text-white"></FaGithub></Link>
   <Link to='https://www.facebook.com/mir.naiem.3/'><FaFacebook size={60} className="bg-[#252525] p-4 border border-[#343434] rounded-full text-white"></FaFacebook></Link>
   <Link to='https://www.instagram.com/developer_naiem/'><FaInstagram size={60} className="bg-[#252525] p-4 border border-[#343434] rounded-full text-white"></FaInstagram></Link>
  
  </div>
   </div>
   <div className="col-span-4 relative bg-[#1f1f1f] p-6 rounded-3xl">
   <h2 className="text-5xl font-bold text-white">Let's work <span className="text-[#5b78f6]">together</span></h2>
   <img className="absolute top-0 z-0 right-10" src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2.png" alt="" />

   <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-10">
    <input className="w-full bg-[#262626] p-5 text-[#757569] rounded-xl" type="text" name="user_name" placeholder="Name*"  /><br />
    <input className="w-full bg-[#262626] p-5 text-[#757569] rounded-xl"  type="email" name="user_email" placeholder="Email*" id="" /><br />
    <input className="w-full bg-[#262626] p-5 text-[#757569] rounded-xl"  type="text" name="from_name" placeholder="Your Subject" /><br />
    <textarea className="w-full bg-[#262626] p-5 text-[#757569] rounded-xl"  name="message" placeholder="Your Message" id="" cols="5" rows="5"></textarea><br />
    <input className="w-full bg-[#262626] p-5 text-white font-bold hover:bg-white hover:text-black hover:duration-500 duration-500 rounded-xl"  type="submit" value="Send Message" />
   </form>
   </div>
  </div>
 );
};

export default Contact;