
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {



 return (
 
   <div className=" w-4/5 mx-auto ">
  <Navbar></Navbar>
  <div className="min-h-screen"><Outlet></Outlet></div>
  <Footer></Footer>
  </div>

 );
};

export default Main;