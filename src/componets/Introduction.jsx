import myimg from '../assets/myimg.png'
import test from '../assets/test.webp'
import { faArrowDown, faUser, faBars, faX, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Introduction(){
    useEffect(()=>{
  AOS.init({
  duration:1000
  });
  },[])
//bg-[url('./assets/hero-bg.jpg')]
    return (
            <div>

        <div id='section1' className=" relative flex lg:flex-row justify-between
         text-[#ACC8A2] text-2xl  items-center  

        min-h-screen w-full  sm:flex-col flex-col  bg-[#1A2517]  " >
            
            <div className=" ml-7 flex flex-col items-start p-1
             text-amber-50 bold justify-center h-[500px] w-auto">
                

                 <h2 data-aos="fade-right"  className='text-3xl  text-[#ACC8A2]  write mt-[50px]'>
                    Welcome to MyProfolio </h2> 
                 <p data-aos="fade-up" className='text-3xl text-[#ACC8A2] mt-[20px]'>
                    My name is JboyCreator, 
                    I'm fullstuck developer, I build <strong>Website</strong>,<strong>Mobileapp</strong> and <strong>Systems </strong><br />   Click button below to see my project</p>

                <a href='#section2' data-aos="fade-right"  className="bg-[#3a5732] w-auto lg:w-[200px] lg:ml-[500px] 
                p-2 mt-[30px] hover:scale-110 transition text-center shadow-lg hover:shadow-2xl rounded text-[#ACC8A2] hover:text-[#243120] hover:bg-[#74bd5e] "> Project <FontAwesomeIcon icon={faArrowDown} />  </a>
                
                </div>
            
            <div  className=" sm:mb-[50px]   lg:mr-7  flex items-center
             text-amber-50 rounded-3xl justify-center  
             ml-2 mr-2 shadow-amber-200  
             sm:h-[300px] lg:h-[500px] lg:w-[500px]">
                 <img data-aos="zoom-in" src={test} className='rounded-3xl sm:h-[400px]' alt="person" />
                </div>
                   
            </div>

         
            
            </div>
    )
}

export default Introduction;