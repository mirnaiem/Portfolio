import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion"
const Navbar = () => {
  const menuOption = <>

    <li ><Link className="hover:text-blue-300">Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to="/project">Projects</Link></li>
    <li><Link to='/skill'>Skill</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
  </>
  return (
    <motion.div 
    initial={{y: -250}}
    animate={{y: -10}}
    transition={{delay:0.2, duration:.5, type:'spring',stiffness:100}}
    className="navbar sticky top-0 z-20 bg-black font-mono pt-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] md:p-2 shadow bg-base-100 text-xl rounded-box w-52">
            {menuOption}
          </ul>
        </div>
        <h1 className="btn btn-ghost invisible md:visible normal-case text-xs md:text-4xl text-[#8c8c8c]">Mir Nayeem Hasan  </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl text-white  menu-horizontal px-1">

          {menuOption}

        </ul>
      </div>
      < div className="navbar-end">
        <a href="/public/Mir Nayeem Hasan's resume (1).pdf" download className="flex gap-2 p-2 bg-slate-300 rounded-lg md:btn">Resume <FaFileDownload size={25}></FaFileDownload></a>
      </div>
    </motion.div>
  );
};

export default Navbar;