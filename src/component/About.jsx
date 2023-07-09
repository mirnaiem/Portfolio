import { FaFacebook, FaGlobe } from "react-icons/fa";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="mt-20 mb-6 grid md:grid-cols-3 gap-6">
        <div className="bg-[#191919] flex my-auto h-[340px] col-span-1 rounded-3xl p-6 ">
          <img className="rounded-2xl w-full" src="https://i.ibb.co/g7gKfyY/IMG-20211216-WA0003-removebg-preview-2.png" alt="" />
        </div>
        <div className='md:col-span-2 space-y-7 '>
          <h2 className="text-white text-5xl font-bold ">Self-Summery</h2>
          <div className=" bg-[#191919] rounded-3xl px-10 pb-8 text-white ">
            <img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2.png" alt="" />
            <h2 className="text-4xl font-bold mt-2">Mir Nayeem Hasan</h2>
            <p className="text-xl font-sans text-justify ">Passionate and detail-oriented junior web developer with expertise in building engaging and user-friendly web applications. Proficient in HTML, HTML5, CSS, Bootstrap, Tailwind CSS, and Daisy UI, specializing in visually appealing and responsive interfaces. Experienced in JavaScript and React for dynamic and interactive front-end experiences. Skilled in Node.js and Express.js for scalable and efficient server-side applications. Well-versed in MongoDB for effective data management. Continuously learning and staying updated with industry trends. Collaborative mindset and effective communication skills for seamless teamwork. Motivated by challenges and committed to delivering exceptional web solutions. Ready to connect and collaborate on innovative projects in web development.</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className=" bg-[#191919] rounded-3xl p-10 ">
          <h2 className="text-white text-2xl font-bold mb-4">Experience</h2>
          <p className="text-[#8c8c8c] text-xl ">2023-present</p>
          <h2 className="text-white text-2xl mt-2">Web Developer</h2>
          <p className="text-[#8c8c8c] text-xl">Self Project</p>
        </div>
        <div className=" bg-[#191919] rounded-3xl p-6 ">
          <div className=" bg-[#191919] rounded-3xl p-10 ">
            <h2 className="text-white text-2xl font-bold mb-4">Education</h2>
            <p className="text-[#8c8c8c] text-xl ">2020-present</p>
            <h2 className="text-white text-2xl mt-2">Bachelor in International Relations</h2>
            <p className="text-[#8c8c8c] text-xl">University of Rajshahi</p>
          </div>
        </div>
      </div>


      <div className="grid md:grid-cols-4 gap-6 mt-6">

        <div className='bg-[#191919] p-4 rounded-3xl col-span-1'>
          <div className="flex  justify-evenly gap-2 bg-[#222222] border border-[#343434] p-3 rounded-3xl ">
            <FaGlobe size={80} className="bg-[#252525] p-4 border border-[#343434] rounded-full text-white"></FaGlobe>
            <FaFacebook size={80} className="bg-[#252525] p-4 border border-[#343434] rounded-full text-white"></FaFacebook>
          </div>
          <div className='flex justify-between mt-4' >
            <div> <h2 className='text-[#8c8c8c] uppercase'>Connect with me</h2>
              <h2 className='text-2xl text-white'>Profiles</h2></div>
            <Link to='/contact'><Arrow></Arrow></Link>
          </div>

        </div>

        <div className=" bg-[#191919] md:col-span-2 rounded-3xl px-10 pb-8 text-white ">
          <Link to='/contact'><img src="https://wpriverthemes.com/landing/gridx-html/assets/images/icon2.png" alt="" />
            <h2 className="text-4xl font-bold">Let's</h2>
            <h2 className="text-5xl font-bold">Work <span className="text-[#5975f0]">together</span> </h2></Link>
        </div>

        <div className='bg-[#191919] p-4 col-span-1 rounded-3xl '>
          <img className='rounded-full w-40 mx-auto' src="https://i.ibb.co/j85nFSn/IMG-20230620-WA0016-removebg-previe.png" alt="" />
          <div className='flex justify-between mt-4'>
            <div > <h2 className='text-[#8c8c8c] uppercase'>More About Me</h2>
              <h2 className='text-2xl text-white'>Credentials</h2></div>
            <Arrow></Arrow>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;




