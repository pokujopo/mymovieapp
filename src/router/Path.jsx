import { HashRouter as Router } from "react-router-dom";
//import Home from '../pages/Home.jsx'
import Post_project from '../pages/Post_project.jsx';
import Project_page from "../pages/Project_page";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../layout/Layout"));
//const Project_page = lazy(() => import("../pages/Project_page"))


const repoName = import.meta.env.VITE_REPO_NAME || "";
    
    export const router = createBrowserRouter(
  [
    { 
      path: `/`, element: (<Layout />),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        
      
      ]
       },
    { path: `/post_project`, element: (<Post_project />) },
    { path: `/project`, element: (<Project_page />)}
  ],  
  { basename: `/${repoName}` }
)


