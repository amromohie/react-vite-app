import {useState} from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Parent from "./components/Parent/Parent.jsx";
import Layout from "./components/Layout/Layout.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Gallary from "./components/Gallary/Gallary.jsx";
import Web from "./components/Web/Web.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";

const routes = createBrowserRouter([

  {
    path: '',
    element: <Layout/>,
    // errorElement: <NotFound />,
    children: [{
      index:true,
      element: <Home/>,
    },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'parent',
        element: <Parent/>
      },
      {
        path: 'gallery',
        element: <Gallary/>,
        children:[
          {index:true, element: <Web/>},
          {path: 'mobile', element: <Mobile/>}
        ]
      },
      {
        path: '*',
        element: <NotFound />, // ✅ Handles unmatched top-level routes
      },


    ],
  },
  // {
  //   path: '*',
  //   element: <NotFound />, // ✅ Handles unmatched top-level routes
  // },


])

function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={routes}></RouterProvider>
}

export default App
