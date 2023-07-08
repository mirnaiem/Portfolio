import { FaBloggerB, FaCss3, FaFacebook, FaGlobe, FaHtml5,  FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";


const Inro2 = () => {
 return (
  <div className="grid grid-cols-4 gap-6">

<div className='bg-[#191919] p-4 rounded-3xl col-span-1'>
   <div className="flex justify-center ">
   <FaBloggerB size={80} className=" text-white"></FaBloggerB>
   </div>
       <div className='flex justify-between mt-4'>
      <div> <h2 className='text-[#8c8c8c] uppercase'>BLog</h2>
       <h2 className='text-2xl text-white'>Knowledge</h2></div>
       <Arrow></Arrow>
       </div>
    </div>
<div className="col-span-2 bg-[#191919] p-4 h-full flex flex-col gap-10 justify-center rounded-3xl">
<div className="flex justify-around items-center text-white  ">
 <FaHtml5 size={60}></FaHtml5>
 <FaCss3 size={60}></FaCss3>
 <FaJsSquare size={60}></FaJsSquare>
 <FaReact size={60}></FaReact>
 <FaNodeJs size={60}></FaNodeJs>

</div>
<div className='flex justify-between'>

      <div> <h2 className='text-[#8c8c8c] uppercase'>specialization</h2>
       <h2 className='text-2xl text-white'>Skills</h2></div>
       <Link to="skill"><Arrow></Arrow></Link>
       </div>


</div>

<div className='bg-[#191919] p-4 rounded-3xl col-span-1'>
   <div className="flex  justify-evenly gap-2 bg-[#222222] border border-[#343434] p-3 rounded-3xl ">
   <FaGlobe size={80} className="bg-[#252525] p-4 border border-[#343434] rounded-full text-white"></FaGlobe>
    <FaFacebook size={80} className="bg-[#252525] p-4 border border-[#343434] rounded-full text-white"></FaFacebook>
   </div>
       <div className='flex justify-between mt-4' >
      <div> <h2 className='text-[#8c8c8c] uppercase'>Connect with me</h2>
       <h2 className='text-2xl text-white'>Profiles</h2></div>
       <Link to="/contact"><Arrow></Arrow></Link>
       </div>
    
</div>
  </div>
 );
};

export default Inro2;