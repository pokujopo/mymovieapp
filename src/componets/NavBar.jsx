import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faUser, faBars, faX,  } from "@fortawesome/free-solid-svg-icons"


function NavBar(){
    const [menuText, setText] = useState(false);
   
    const listItems = [
        {id: 4, name: 'home', url: '#section1'},
        {id: 1, name: 'Project', url: '#section2'}, 
        {id: 3, name: 'Mysklls', url: '#section3'},
        {id: 2, name: 'Contact', url: '#section4'},
        
        
        
    ]
    
    return(
        <div className="text-[#5B0E14] text-1xl font-semibold bg-[#ACC8A2] flex 
        justify-between items-center opacity-90 w-full  h-[80px] fixed z-10" >
        <a href="" className="ml-2 bold text-[#5B0E14] rounded p-2 uppercase" >JboyCreator</a>
        <div className= {menuText ?  `absolute  lg:static lg:min-h-fit bg-[#ACC8A2] 
        min-h-[60vh] left-0 top-[100%] w-full lg:w-auto p-5 items-center`: `hidden lg:flex`} >

        <li className="flex  lg:flex-row flex-col  
        items-center justify-between font-semibold lg:gap-6 gap-10">
            {listItems.map((item)=> (
                    <ul className="cursor-pointer relative group" key={item.id}>
                        <a href={item.url}>{item.name} </a>
                        
                        <span className="absolute left-0 buttom-[-5px] w-0 h-1
                 rounded-2xl bg-[#273822] transition-all duration-300 group-hover:w-full" ></span>
                        </ul>
            ))}
        </li>
        </div>

            <div className="flex flex-row justify-between items-center">
        <a href="" className=" mr-4 hover:rounded hover:p-2 hover:bg-[#7ac067] text-[#5B0E14] p-2  rounded bg-[#33be0c]" >Welcome  <FontAwesomeIcon icon={faUser} />  </a>
        <a className="mr-3 text-[#5B0E14] lg:hidden hover:bg-[#7ac067]  rounded-2xl p-2 " onClick={()=>setText(!menuText)} >{menuText ?  <FontAwesomeIcon icon={faX} /> :  <FontAwesomeIcon icon={faBars} />}</a>
        </div>
        
        </div>
    )
}

export default NavBar;