import { faHome,  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa'; 

function Footer(){
    const listItems = [
        {id: 1, name: 'Project', url: '#section2',}, 
        {id: 2, name: 'Contact', url: '#section3'},
        {id: 3, name: 'Myskills', url: '#section4'},
        {id: 4, name: 'home', url: '/', path: '/'},
        
    ]
    const copyrightYear = new Date().getFullYear();
    return(
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
                        {item.name} 
                    </a>
                </small>
            ))}
            </div>
           <p className="mr-3 ">&copy; {copyrightYear} Made By JboyCreator</p>
        </footer>
    )
}

export default Footer;