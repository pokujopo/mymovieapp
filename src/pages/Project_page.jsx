import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import myimg from '../assets/hero-bg.jpg'
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faEye, faHand, faSort, faArrowLeft, faArrowRight , faHeart, faHome, faStar, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

function Project_page(){
     const [datas, setData]=useState([]);
     //const [results, setResult]=useState([]);
     const [query, setQuery]=useState("");
     const [sort, setSort]=useState("asc");


     const apiFecth = async(searchTerm="")=>{
        const res = await fetch(`http://localhost:8000/api/search?query=${searchTerm}`);
        const data = await res.json();
        console.log(data.project);
        setData(data.project || []);
       };
         
    useEffect(
             ()=>{
             AOS.init({
             duration:1000
             })}, 
            //apiFecth()
             []);
            
    useEffect(
            ()=>{
                const delay = setTimeout(()=> {
                    apiFecth(query);
                }, 500);
                return()=>clearTimeout(delay);
            
            },[query]);
  
    const sortedData = [...datas].sort((a,b) => {
        if(sort === "asc") return a.name.localeCompare(b.name);
        if(sort === "desc") return b.name.localeCompare(a.name);
        return 0;

    });

    function handleLike(id){
                         console.log(id);
                         fetch("http://localhost:8000/api/detect_like",{
                             method: "POST",
                             headers:{
                                 "Content-Type": "application/json"
                             },
                             body: JSON.stringify({project_id: id})
                         }) .then(res => res.json())
                            .then(()=>{
                                console.log("imepokelawa")
                            })
             
             
                     }
    function handleview(id){
                         console.log(id);
                         fetch("http://localhost:8000/api/detect_view",{
                             method: "POST",
                             headers:{
                                 "Content-Type": "application/json"
                             },
                             body: JSON.stringify({project_id: id})
                         }) .then(res => res.json())
                            .then(()=>{
                                console.log("imepokelawa view")
                            })
             
             
                     }

            const listItems = [
      
        {id: 4, name: 'home', url: '/', path: '/'},
        
    ]
    const copyrightYear = new Date().getFullYear();

        
    return(
        <div className=" lg:bg-[#ACC8A2] min-h-screen flex flex-col text-[#ACC8A2]  bg-[#1A2515]  items-center 
        w-full gap-0 ">
            <div className="flex   items-center lg:w-2xl w-full mt-9 flex-col gap-7 rounded-3xl bg-[#1A2515]">
            <div className=" mt-3">
                <h1 data-aos="fade-left" className="text-3xl p-2 font-semibold uppercase " > <FontAwesomeIcon icon={faProjectDiagram} />All Project</h1>
            </div>

            <div className="">
                <input data-aos="fade-right" className="p-2 w-[400px] text-[#ACC8A2] border-2 rounded-2xl border-[#ACC8A2]"
                 value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="search project here" type="text" />
            </div>

            <div className="p-4 rounded-2xl  flex items-center justify-center gap-4 font-semibold">
               <p data-aos="fade-right"><FontAwesomeIcon  icon={faSort} /> SortBy:</p> 

               <select onChange={(e) => setSort(e.target.value)} value={sort} data-aos="fade-up" name="" id="">
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>

                </select> 

            </div>
            </div>
            <div className="bg-[#1A2517]  flex items-center flex-col gap-2  w-full min-h-screen">

                <div data-aos="fade-up" className=" w-full min-h-screen grid grid-cols-1 px-3 lg:grid-cols-4 
            sm:grid-cols-3 gap-6 lg:px-6 p-7  ">
                   {sortedData.length > 0 ? (sortedData.map((item)=> (
                    <div data-aos="fade-left" key={item.id} className="bg-[#ACC8A2] hover:scale-110 transition shadow-lg hover:shadow-2xl text-[#1A2510] rounded  hw flex flex-col gap-2">
                <div className="bg-[#ACC8A2]  rounded">
                     <img className='h-[200px] rounded w-full' src={`http://127.0.0.1:8000/project_image/${item.image}`} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='font-semibold text-[20px] '>
                        <span className='uppercase'><FontAwesomeIcon icon={faStar} />{item.name}</span>
                        </h1>
                </div>
                <div className='flex flex-row justify-center items-center '>
                    <a onClick={() =>handleview(item.id)} href={`http://${item.link}`} className='mr-2 bg-green-700 w-[200px] text-[#ACC8A2] text-center p-2 rounded hover:bg-red-300' >View <FontAwesomeIcon icon={faEye} /></a>
                    
                    <a onClick={()=>handleLike(item.id)} defaultValue={item.id} className='ml-2 bg-green-700 text-[#ACC8A2] 
                    p-2 rounded hover:bg-red-300'>
                        <FontAwesomeIcon icon={faHeart} />
                    </a>

                </div>
                <div className='flex mr-2 flex-row items-center justify-between mt-0 px-3  gap-3'>
                    <small className="font-semibold">{item.language}</small>
                    <div className='gap-2 flex'>
                    <small>{item.like_count} <FontAwesomeIcon icon={faHeart} /></small>
                    <small>{item.view_count} <FontAwesomeIcon icon={faEye} /></small>
                    </div>
                </div>
            </div>
                ))) :(
                    <p className="min-h-screen w-full flex justify-center itemes-cernter text-3xl"> :( no results</p>
                ) }
                  
                </div>

              

            </div>

                <footer className="bg-[#273822]  text-[#ACC8A2] font-semibold 
        flex flex-col lg:flex-row justify-between items-center
         wrap-break-word border-r-teal-400 w-full h-[100px]">
           
           <div className="ml-2 gap-2 flex flex-row p-2">Follow Me: 
            

               <a href=""> <FaInstagram /> </a>
               <a href=""> <FaTiktok /> </a>
               <a href=""><FaFacebook /> </a>
               <a href=""> <FaGithub /> </a>
               <a href=""><FaYoutube /></a>
                </div>

            <div className="mx-7 flex gap-6   text-center">
            {listItems.map((item)=> (
                <small className="">
                    <a href={item.url} key={item.id}>
                        <FontAwesomeIcon icon={faHome} /> 
                    </a>
                </small>
            ))}
            </div>
           <p className="mr-3 ">&copy; {copyrightYear} Made By JboyCreator</p>
        </footer>
            </div>
        
    )
}

export default Project_page;