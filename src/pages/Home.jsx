import NavBar from '../componets/NavBar.jsx'
import Introduction from '../componets/Introduction.jsx'
import Footer from '../componets/Footer.jsx'
import Project from '../componets/Project.jsx'
import Myskills from '../componets/Myskills.jsx'
import Contact from '../componets/Contact.jsx'

function Home(){
    return(
        <>
    <NavBar />
    <Introduction />
    <Project />
    <Myskills />
    <Contact />

        </>
    )
}

export default Home;