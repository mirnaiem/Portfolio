import { FaBootstrap, FaCss3,  FaGithub,  FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss,BiLogoMongodb } from "react-icons/bi";
import { SiExpress,SiDaisyui,SiFirebase } from "react-icons/si";

const Skill = () => {
 return (
  <>
  <h2 className="text-white text-5xl text-center font-bold mb-6">Skills</h2>

  <div className="grid grid-cols-6 gap-6">
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <FaHtml5 size={60} className="text-white mx-auto"></FaHtml5>
   <h2 className="text-[#8c8c8c] text-xl font-bold">85%</h2>
   <h2 className="text-white text-2xl">HTML</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <FaCss3 size={60} className="text-white mx-auto"></FaCss3>
   <h2 className="text-[#8c8c8c] text-xl font-bold">85%</h2>
   <h2 className="text-white text-2xl">CSS</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <FaBootstrap size={60} className="text-white mx-auto"></FaBootstrap>
   <h2 className="text-[#8c8c8c] text-xl font-bold">70%</h2>
   <h2 className="text-white text-2xl">Bootsrap</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <BiLogoTailwindCss size={60} className="text-white mx-auto"></BiLogoTailwindCss>
   <h2 className="text-[#8c8c8c] text-xl font-bold">80%</h2>
   <h2 className="text-white text-2xl">Tailwind</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <SiDaisyui size={60} className="text-white mx-auto"></SiDaisyui>
   <h2 className="text-[#8c8c8c] text-xl font-bold">85%</h2>
   <h2 className="text-white text-2xl">DaisyUI</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <FaJsSquare size={60} className="text-white mx-auto"></FaJsSquare>
   <h2 className="text-[#8c8c8c] text-xl font-bold">65%</h2>
   <h2 className="text-white text-2xl">JavaScript</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <FaReact size={60} className="text-white mx-auto"></FaReact>
   <h2 className="text-[#8c8c8c] text-xl font-bold">80%</h2>
   <h2 className="text-white text-2xl">React</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <FaNodeJs size={60} className="text-white mx-auto"></FaNodeJs>
   <h2 className="text-[#8c8c8c] text-xl font-bold">60%</h2>
   <h2 className="text-white text-2xl">Node.js</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <SiExpress size={60} className="text-white mx-auto"></SiExpress>
   <h2 className="text-[#8c8c8c] text-xl font-bold">60%</h2>
   <h2 className="text-white text-2xl">Express.js</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <BiLogoMongodb size={60} className="text-white mx-auto"></BiLogoMongodb>
   <h2 className="text-[#8c8c8c] text-xl font-bold">65%</h2>
   <h2 className="text-white text-2xl">MongoDB</h2>
   </div>
 
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <SiFirebase size={60} className="text-white mx-auto"></SiFirebase>
   <h2 className="text-[#8c8c8c] text-xl font-bold">65%</h2>
   <h2 className="text-white text-2xl">Firebase</h2>
   </div>
   <div className="bg-[#222222] py-2 rounded-2xl border text-center border-[#343434] ">
   <FaGithub size={60} className="text-white mx-auto"></FaGithub>
   <h2 className="text-[#8c8c8c] text-xl font-bold">70%</h2>
   <h2 className="text-white text-2xl">GitHub</h2>
   </div>
  </div></>
 );
};

export default Skill;