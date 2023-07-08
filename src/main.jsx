import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './component/Main.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Project from './component/Project';
import Skill from './component/Skill';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'about',
    element:<About></About>
  },
  {
    path:'project',
    element:<Project></Project>
  },
  {
    path:'skill',
    element:<Skill></Skill>
  },
  {
    path:'contact',
    element:<Contact></Contact>
  }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='bg-black min-h-screen font-mono'>
        <RouterProvider router={router} />
      </div>
      
      
  </React.StrictMode>,
)
