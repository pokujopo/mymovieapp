import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faUpload, faWebAwesome, faLink, faImage, faLanguage  } from "@fortawesome/free-solid-svg-icons"

function Post_project(){
    
    return(
        <div className=" bg-[#1A2510] flex items-center justify-center w-auto lg:w-full min-h-screen">

            <div className="bg-[#1A2510] lg:rounded-3xl  lg:border-2 text-[#ACC8A2]  w-auto p-3 lg:p-7
            flex flex-col ">

                <form action="http://127.0.0.1:8000/api/post_project" method="post" className="flex gap-8 flex-col p-5 items-center justify-center" encType="multipart/form-data">
                <div className=" font-semibold flex items-center w-full gap-2">
                   <a className=" uppercase p-2 rounded-2xl border-0  ml-0  w-auto hover:bg-gray-900" href="/">
                   <FontAwesomeIcon icon={faArrowLeft} /> home
                   </a>
                    <h1 className="uppercase text-2xl ml-4"> post project<FontAwesomeIcon icon={faUpload} /></h1>
                </div>

                <div className="flex  flex-col">
                    <label className=" font-semibold  " htmlFor="text">SiteName <FontAwesomeIcon icon={faWebAwesome} />:</label>
                    <input className=" w-[400px] h-[50px] border-2 rounded-2xl p-3 mt-2 " type="text" name="name" placeholder=" write site name" />
                </div>

                <div className="flex  flex-col">
                    <label className=" font-semibold  " htmlFor="link">Link <FontAwesomeIcon icon={faLink} />:</label>
                    <input className=" w-[400px] h-[50px] border-2 rounded-2xl p-3 mt-2 " type="link" name="link" placeholder=" paste/write site link" />
                </div>
                <div className="flex  flex-col">
                     <label className=" font-semibold  " htmlFor="image">Image <FontAwesomeIcon icon={faImage} />:</label>
                    <input className=" w-[400px] h-[50px] border-2 rounded-2xl p-3 mt-2 " type="file" name="image"  />
                </div>
                <div className="flex  flex-col">
                    <label className=" font-semibold  " htmlFor="language">Language <FontAwesomeIcon icon={faLanguage} />:</label>
                    <select className=" w-[400px] h-[50px] border-2 rounded-2xl p-3 mt-2 " name="language" >
                        <option  defaultValue="">reactjs</option>
                        <option value="">flutter</option>
                    </select>
                </div>

                <div className="flex  flex-col">
                    <button className="bg-[#3c5f1b] p-2 rounded-2xl w-2xs hover:bg-gray-900" type="submit">Upload<FontAwesomeIcon icon={faUpload} /></button>
                </div>

                </form>
                </div>
            </div>
    )
}

export default Post_project;