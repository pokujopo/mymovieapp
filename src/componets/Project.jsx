import myimg from '../assets/hero-bg.jpg'
import post1 from '../assets/bg-profile.jpg'
import post2 from '../assets/carousel-1.jpg'
import post3 from '../assets/carousel-2.jpg'
import post4 from '../assets/carousel-3.jpg'
import post5 from '../assets/vr-bg.jpg'
import post6 from '../assets/home-decor-2.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { faEye, faArrowRight, faHeart , faStar,} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { stringify } from 'postcss'




function Project(){
    const [datas, setData]=useState([])
    
   useEffect(
         ()=>{
            fetch("http://localhost:8000/api/get_project")
            .then(res => res.json())
            .then(data => {
                console.log(data.all_project);
                setData(data.all_project);
            })
         },

        ()=>{
        AOS.init({
        duration:1000
        });},[])

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

        

        const allProject = datas.map((item)=> (
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
                ))

    return(
        <div id="section2" className="text-[#ACC8A2] w-full flex flex-col
         lg:gap-5 gap-2
         min-h-screen bg-[#1A2510] ">
            <div className=" flex justify-center mt-3 items-center">
            <h1  data-aos="fade-right" className="font-semibold p-5 text-3xl ">
               <a href="/">MyProject:</a> 
            </h1>
            </div>

            <div data-aos="fade-up" className="grid grid-cols-1 px-3 lg:grid-cols-4 
            sm:grid-cols-3 gap-6 lg:px-6 pt-3" >

                {allProject}

            </div>

            <div className="flex justify-center items-center  ">
                <button data-aos="fade-left" className="bg-[#3a5732] shadow-lg w-[200px] text-[#ACC8A2] hover:text-[#243120] hover:bg-[#74bd5e]   text-2xl
                 mb-2 font-semibold rounded-lg hover:scale-110 hover:shadow-2xl transition px-3 py-3">
                   <a href="/project">see more <FontAwesomeIcon icon={faArrowRight} /></a>   </button>
            </div>

            </div>
    )

}

export default Project;
