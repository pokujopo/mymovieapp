import Footer from '../componets/Footer.jsx'
import { Outlet } from "react-router-dom";


function Layout(){
     return(
        <>
         <Outlet /> 
         <Footer />
        </>
     )
}

export default Layout;