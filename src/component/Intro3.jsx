import { Link } from "react-router-dom";



const Intro3 = () => {
 return (
  <div className="grid mt-6 md:grid-cols-2 gap-6">
   <div className=" bg-[#191919] flex flex-col md:flex-row items-center justify-center gap-4 py-10 rounded-3xl">

 <div className="uppercase rounded-2xl text-center p-8 w-40 bg-[#1f1f1f]">
  <h2 className="text-white text-3xl font-bold mb-2">01</h2>
  <h2 className="text-[#8c8c8c] font-bold">Years</h2>
  <h2 className="text-[#8c8c8c] font-bold">Experience</h2>
</div>
 <div className="uppercase rounded-2xl w-40 text-center p-8 bg-[#1f1f1f]">
  <h2 className="text-white text-3xl font-bold mb-2">00</h2>
  <h2 className="text-[#8c8c8c] font-bold">Client</h2>
  <h2 className="text-[#8c8c8c] font-bold">worldwide</h2>
</div>
 <div className="uppercase rounded-2xl w-40 text-center p-8 bg-[#1f1f1f]">
  <h2 className="text-white text-3xl font-bold mb-2">+06</h2>
  <h2 className="text-[#8c8c8c] font-bold">Total</h2>
  <h2 className="text-[#8c8c8c] font-bold">projects</h2>
</div>
  </div>
   <div className=" bg-[#191919] rounded-3xl px-2 md:px-10 pb-8 text-white ">
    <Link to='/contact'>
  <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2.png" alt="" />
 <h2 className="text-4xl font-bold">Let's</h2>
 <h2 className="text-5xl font-bold">Work <span className="text-[#5975f0]">together</span> </h2></Link>
</div>
  </div>
  
 );
};

export default Intro3;




