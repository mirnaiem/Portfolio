import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";


const Project = () => {
 return (
  <div className="my-20">
   <h2 className="text-white text-5xl text-center font-bold mb-6">My Projects</h2>

   <div className="grid md:grid-cols-3 mx-aut0 gap-2 ">
    <div className="bg-[#191919] p-10  pb-16  md:p-6  h-[500px] w-[85%] md:w-full rounded-3xl ">
     <div className="rounded-2xl w-full bg-[url('https://i.ibb.co/JQnHRTW/assignment-12-72b76-web-app-1.png')] bg-cover h-[70%]  ease-in-out duration-[5s]  hover:bg-bottom  " ></div>
    
     <h2 className="text-[#8c8c8c] text-xl mt-6">MERN Stack Project</h2>
     <h1 className="text-white text-2xl font-bold">Language School</h1>

     <div className="flex flex-col md:flex-row justify-between md:gap-6 items-center ">
      <div className="flex mt-3 gap-2">
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://github.com/mirnaiem/language-lab-client">Client<FaGithub></FaGithub></Link>
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://github.com/mirnaiem/language-lab-server">Server<FaGithub></FaGithub></Link>
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://assignment-12-72b76.web.app/">Preview<FaExternalLinkAlt></FaExternalLinkAlt></Link>
      </div>

      <Arrow></Arrow>
     </div>
    </div>
    <div className="bg-[#191919] p-2 pb-16  md:p-6  h-[500px] w-[85%] md:w-full  rounded-3xl ">
     <div className="rounded-2xl w-full bg-[url('https://i.ibb.co/RNbYCd5/assignment-11-auth-a17e0-web-app.png')] bg-cover h-[70%]  ease-in-out duration-[5s]  hover:bg-bottom  " ></div>
    
     <h2 className="text-[#8c8c8c] text-xl mt-6">FullStack Project</h2>
     <h1 className="text-white text-2xl font-bold">Toy Shop</h1>

     <div className="flex flex-col md:flex-row justify-between md:gap-6 items-center ">
      <div className="flex mt-3 gap-2">
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://github.com/mirnaiem/toy-shop-client">Client<FaGithub></FaGithub></Link>
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://github.com/mirnaiem/toy-shop-server">Server<FaGithub></FaGithub></Link>
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://assignment-11-auth-a17e0.web.app/">Preview<FaExternalLinkAlt></FaExternalLinkAlt></Link>
      </div>

      <Arrow></Arrow>
     </div>
    </div>
    <div className="bg-[#191919] p-2 pb-16  md:p-6 h-[500px] w-[85%] md:w-full  rounded-3xl ">
     <div className="rounded-2xl w-full bg-[url('https://i.ibb.co/4N1SxsL/easy-education-delta-vercel-app.png')] bg-cover h-[70%]  ease-in-out duration-[5s]  hover:bg-bottom  " ></div>
    
     <h2 className="text-[#8c8c8c] text-xl mt-6">FullStack Project</h2>
     <h1 className="text-white text-2xl font-bold">Easy Education</h1>

     <div className="flex flex-col md:flex-row justify-between md:gap-6 items-center ">
      <div className="flex mt-3 gap-2">
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://github.com/mirnaiem/easy-education">Client<FaGithub></FaGithub></Link>
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://github.com/mirnaiem/easy-education-server">Server<FaGithub></FaGithub></Link>
       <Link className="flex items-center gap-2 h-8 bg-[#252525] px-2 rounded-lg m-0 text-white" to="https://easy-education-delta.vercel.app/">Preview<FaExternalLinkAlt></FaExternalLinkAlt></Link>
      </div>

      <Arrow></Arrow>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Project;