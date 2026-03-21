import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Myskills(){
   useEffect(()=>{
  AOS.init({
  duration:1000
  });
  },[])
  return(
    <div id="section3" className="flex justify-between p-9 
     flex-col  min-h-[80vh] items-center text-[#ACC8A2]  bg-[#273822]">
       
       <div className=" flex items-center justify-center">
        <h1  data-aos="fade-right" className="text-3xl font-semibold:">MySkills</h1>
       </div>

       <div className="  flex  items-center justify-center p-3">
        <h4 data-aos="fade-left" className=" rounded typed p-4 w-xs  text-center text-2xl text-nowrap uppercase"> I'm <br /> FullStuck Development</h4>
       </div>

       <div className="flex itemes-center gap-10 justify-between flex-col
        lg:flex-row ">

        <div data-aos="zoom-in" className="bg-[#1A2517] p-3 h-[200px] w-[200px] hover:scale-110 transition shadow-lg hover:shadow-2xl rounded-[100px] 
        text-center border-emerald-300 flex flex-col gap-2 items-center justify-center">
          <span className="text-3xl text-wrap uppercase">react.js</span>
          <span><small>Project:</small>+200K</span>
          </div>
        
        <div data-aos="zoom-in" className="bg-[#1A2517] hover:scale-110 transition shadow-lg hover:shadow-2xl p-3 h-[200px] w-[200px] rounded-[100px] 
        text-center border-emerald-300 flex flex-col gap-2 items-center justify-center">
          <span className="text-3xl text-wrap uppercase">Laravel</span>
          <span><small>Project:</small>+200K</span>
          </div>
        <div data-aos="zoom-in" className="bg-[#1A2517] p-3 h-[200px] w-[200px] hover:scale-110 transition shadow-lg hover:shadow-2xl rounded-[100px] 
        text-center border-emerald-300 flex flex-col gap-2 items-center justify-center">
          <span className="text-3xl text-wrap uppercase">Flutter</span>
          <span><small>Project:</small>+200K</span>
          </div>
        <div data-aos="zoom-in" className="bg-[#1A2517] hover:scale-110 transition shadow-lg hover:shadow-2xl p-3 h-[200px] w-[200px] rounded-[100px] 
        text-center border-emerald-300 flex flex-col gap-2 items-center justify-center">
          <span className="text-3xl text-wrap uppercase">Html/Css/</span>
          <span><small>Project:</small>+200K</span>
          </div>
       </div>
       <div className=" mb-0 rounded-2xl p-1 flex items-start justify-start">
        <p className="flex lg:flex-row flex-col items-center p-3  text-wrap">
          <small className="uppercase">Program language: </small> 
          <span className="lowercase">Php(Laravel framework), JavaScript(React.js), Html/Css(Tailwindcss framework), 
            Dart(Flutter framework), Python(Django framework and Tkinter) </span>
          </p>
       </div>
    </div>
  )
}

export default Myskills;