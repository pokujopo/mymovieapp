import { createBrowserRouter } from "react-router-dom";
import Home from '../componets/Home.jsx'
import Test from '../componets/test.jsx'

const repoName = import.meta.env.VITE_REPO_NAME || "";
    
    export const router = createBrowserRouter(
  [
    { 
      path: `/`, element: <Home />},
      {path: `/test`, element: <Test />},

  ],  
  { basename: `/${repoName}` }
)
