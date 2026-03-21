import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faF, faMobilePhone, faLocation, faEnvelope, faX,  } from "@fortawesome/free-solid-svg-icons"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaGithub, FaLinkedin, FaTiktok,  } from 'react-icons/fa'; 


function Contact(){

      useEffect(()=>{
    AOS.init({
    duration:1000
    });
    },[])

return(
    <div id="section4" className="flex p-4 lg:flex-row flex-col-reverse justify-between items-center gap-4
min-h-[40vh] bg-[#1A2517] text-[#ACC8A2]">
        <div data-aos="fade-right" className=" h-[450px] p-3 flex flex-col gap-2  items-center lg:items-start justify-start w-auto lg:w-[600px]">
           <h1 className="text-2xl p-2 font-semibold text-center uppercase">My Contact:</h1>
           <div className=" gap-5 p-5 flex flex-col h-[400px] w-[400px]">
             
             <p><FontAwesomeIcon icon={faMobilePhone} /> What'sap Number : +255786584974 </p>
             <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="pokujopo@gamail.com">pokujopo@gamail.com</a></p>
             <p className="flex flex-row gap-2">Follow Me: <a href=""> <FaInstagram /> </a> <a href=""> <FaTiktok /> </a> <a href=""><FaFacebook /> </a>
                                       <a href=""> <FaGithub /> </a>
                                       <a href=""><FaYoutube /></a> </p>
             <p><FontAwesomeIcon icon={faLocation} /> Location: Tabata,Dar,Tanzania</p>
             <p className="bg-white h-[100px] flex items-center rounded-2xl justify-center"> 
                <iframe className="h-[100px] rounded-2xl w-full" 
                    src="https://testmamarichsystem.rf.gd/"
                    frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></p>
           </div>

        <div className=" flex flex-row w-auto lg:w-[550px] p-2 gap-2  items-center justify-between">
            <p className=" font-semibold flex flex-row">Click WhatappChannel: <a href=""> <FaWhatsapp /> </a> </p>
            <p className="font-semibold flex flex-row">Click WhatappGroup: <a href=""> <FaWhatsapp /> </a> </p>
        </div>
        </div>

        <div data-aos="fade-left" className=" border-emerald-200 rounded h-[450px] p-3 items-center flex-col  space-y-5 w-auto  lg:w-[600px] flex ">

            <div>
                <h1 className=" text-2xl uppercase font-semibold">send me a text</h1>
            </div>
            <div className=" flex flex-col">
                <label className="font-semibold" htmlFor="name">Name:</label>
                <input type="text" placeholder="Write Name" className="w-[400px] h-[50px] px-4 mt-2 border-2 rounded-2xl border-emerald-900" />
            </div>

            <div className=" flex flex-col">
                <label className="font-semibold" htmlFor="email">Email:</label>
                 <input placeholder="Write Email" className="w-[400px] h-[50px] px-4 mt-2 border-2 rounded-2xl border-emerald-900" type="email" name="" id="" />
            </div>

            <div className=" flex flex-col">
                <label className="font-semibold" htmlFor="Text">Text:</label>
                <textarea placeholder="Write Your Text" type="text" className="w-[400px] h-[80px] px-4 py-2 mt-2 border-2 rounded-2xl border-emerald-900" />
            </div>

            <div className="">
                <button type="submit" className="p-2 bg-[#206607] w-2xs rounded-2xl hover:bg-[#293824] text-2xl">send</button>
            </div>

        </div>

    </div>
)
}

export default Contact;
