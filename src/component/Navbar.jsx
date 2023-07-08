import { Link } from "react-router-dom";
import {FaFileDownload } from "react-icons/fa";

const Navbar = () => {
 const menuOption = <>

<li ><Link className="hover:text-blue-300">Home</Link></li>
<li><Link to='/about'>About</Link></li>
<li><Link to="/project">Projects</Link></li>
<li><Link to='/skill'>Skill</Link></li>
<li><Link to='/contact'>Contact</Link></li>
</>
 return (
  <div className="navbar sticky top-0 z-20 bg-black font-mono text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-xl rounded-box w-52">
       {menuOption}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-4xl">Mir Nayeem Hasan  </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-xl  menu-horizontal px-1">
       
      {menuOption}
      
    </ul>
  </div>
  <div className="navbar-end">
    <a href="/public/Mir Nayeem Hasan's resume (1).pdf" download className="btn text-xl">Resume <FaFileDownload size={30}></FaFileDownload></a>
  </div>
</div>
 );
};

export default Navbar;