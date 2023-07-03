import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import MyWork from './Components/MyWork';
import Home from './Home/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <AboutMe></AboutMe>,
  },
  {
    path:"/resume",
    element: <Resume></Resume>,
  },
  {
    path:"/contact",
    element: <Contact></Contact>
  },
  {
    path:"/myworks",
    element: <MyWork></MyWork>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
