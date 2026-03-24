import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import cover from '../assets/movie.jpg'

function Home(){
    const [datas, setData]=useState([]);
         //const [results, setResult]=useState([]);
         const [query, setQuery]=useState("");
         const [sort, setSort]=useState("asc");
         const API_KEY = "082ee8234da9f8097c47df92ad78f234";
    
        const apiFetch = async (searchTerm = "") => {

            let url = "";

            if (searchTerm === "") {
                // popular movies
                url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;


            } else {
                // search movie
                url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;


            }

            const res = await fetch(url);
            const data = await res.json();

            console.log(data.results);
            setData(data.results || []);
};
         /*const apiFecth = async(searchTerm="")=>{
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`);
            const data = await res.json();
            console.log(data.results);
            setData(data.results || []);
           }; */
             
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
                        apiFetch(query);
                    }, 500);
                    return()=>clearTimeout(delay);
                
                },[query]);
      
        const sortedData = [...datas].sort((a,b) => {
            if(sort === "asc") return a.title.localeCompare(b.title);
            if(sort === "desc") return b.title.localeCompare(a.title);
            return 0;
    
        });
    
    return(
        <div className=" min-h-screen bg-[url('../src/assets/movie.jpg')] w-full text-[#F1E194] bg-[#5B0E14]">
            <div className="w-full    mx-auto  backdrop-blur-md bg-[#5B0E14]/50 p-4">
                
              <div className="flex flex-col gap-1">
                   
                <div className=" p-4 flex flex-col items-center justify-center gap-2">
                    <img src={cover} className="w-[350px] shadow-lg h-[220px] mb-5 rounded-2xl" alt="cover.jpg" />
                    <div className="mb-2">
                    <h1 className=" font-bold text-3xl uppercase">Search Movie</h1>
                    </div>
                    <div>
                        <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Search..." className="border-2  p-4 border-amber-400 rounded-2xl w-auto  lg:w-2xs" />
                    </div>
                    <div className="flex flex-row  gap-4">

                    <p className="font-semibold">sortBy:</p>
                    <select onChange={(e) => setSort(e.target.value)} value={sort} data-aos="fade-up" className=" border-amber-500 px-2   w-auto rounded-2xl" name="" id="">
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                    </div>
                </div>
            
                <div className="min-h-screen bg-[#220507] rounded w-full flex flex-col   ">
                    <div className="bg-[#220507] rounded grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-3 p-4 items-center justify-center ">
                            
                            {sortedData.length > 0 ? (sortedData.map((item)=> (
                            <div data-aos="fade-left" className="relative w-auto sm:w-[260px] lg:w-[260px] h-[380px] rounded-2xl overflow-hidden shadow-lg group">
                               
                                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className=" w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="" />
                                <div className=" absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent "></div>

                                    <div className="absolute bottom-0 w-full p-4 backdrop-blur-md bg-black/40">
                                        <div>
                                           <h2 className="text-white text-lg font-semibold truncate">Title: {item.title}</h2> 
                                        </div>

                                        <div className="flex justify-between items-center mt-1 text-sm text-gray-300">
                                            <p>⭐ {item.vote_average}</p>
                                            <p>HD</p>
                                            </div>

                                        <div className="flex gap-2 mt-3">
                                            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm">Download</button>
                                            <button className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg text-sm">watch</button>
                                            </div>
                                    </div>
                                
                                </div>
                                            ))) :(
                                                <p className="min-h-screen w-full flex justify-center itemes-cernter text-3xl"> :( no results</p>
                                            ) }
                                              

                           
                           
                           

                            
                            

                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center p-3">
                        <button className="bg-[#5B0E14] p-2 rounded hover:bg-amber-600 w-2xs">pre</button>
                        <button className="bg-[#5B0E14] p-2 rounded hover:bg-amber-600 w-2xs">next</button>
                    </div>
                </div>
              </div>
            </div>
            </div>
    )
}
export default Home;
