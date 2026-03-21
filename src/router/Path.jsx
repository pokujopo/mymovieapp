import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const Layout = lazy(() => import("../layout/Layout"));
const Post_project = lazy(() => import("../pages/Post_project"));
const Project_page = lazy(() => import("../pages/Project_page"));

// Hakuna dependency kwenye repo name, HashRouter haita use basename
export const router = createHashRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/", 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/post_project",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Post_project />
      </Suspense>
    ),
  },
  {
    path: "/project",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Project_page />
      </Suspense>
    ),
  },
]);