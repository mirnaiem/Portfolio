import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import './Home.css'

const Intro = () => {
 return (
  <div className="mt-20 mb-6 grid grid-cols-2 gap-6">
  <div className="bg-[#191919] rounded-3xl flex items-center ">
   <img className="p-10 w-4/5  round" src="https://i.ibb.co/g7gKfyY/IMG-20211216-WA0003-removebg-preview-2.png" alt="" />
   <div className='pe-10'>
     <h2 className='text-[#8c8c8c] font-bold text-xl'>Mir Nayeem</h2>
     <h1 className='text-2xl text-white'>A Web Developer.</h1>
     <p className='text-[#8c8c8c] mt-3'>I am a MERN Stack Web Developer Based In Bangladesh</p>
    
    <Arrow></Arrow>
    
   </div>
  </div>
  <div className='text-white'>
   <div></div>
   <div className='flex flex-col gap-5'>
    <div className='bg-[#191919] rounded-full p-2 mb-0 text-xl'><marquee behavior="scroll"  direction="left">Web Designer || Frontend Developer || MERN Stack Developer || FullStack Developer ||</marquee></div>


    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#191919] p-4 rounded-3xl '>
       <img className='rounded-full w-40 mx-auto' src="https://i.ibb.co/j85nFSn/IMG-20230620-WA0016-removebg-previe.png" alt="" />
       <div className='flex justify-between mt-4'>
      <div > <h2 className='text-[#8c8c8c] uppercase'>More About Me</h2>
       <h2 className='text-2xl text-white'>Credentials</h2></div>
       <Link to='/about'><Arrow></Arrow></Link>
       </div>
    </div>
    <div className='bg-[#191919] px-4 py-6 rounded-3xl relative'>
       <img className='rounded-full w-40 mx-auto relative z-10 top-0 ' src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?size=626&ext=jpg&ga=GA1.2.1710214001.1688810583&semt=ais" alt="" />
       <h2 className='absolute top-0 left-20 z-0 text-3xl text-[#575757] font-extrabold'>MY WORKS</h2>
       <div className='flex justify-between'>
      <div> <h2 className='text-[#8c8c8c] uppercase'>Showcase</h2>
       <h2 className='text-2xl text-white'>Projects</h2></div>
       <Link to='/project'><Arrow></Arrow></Link>
       </div>
    </div>
   </div>
    </div>
   
  </div>

 </div>
 );
};

export default Intro;