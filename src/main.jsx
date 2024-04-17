import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './Pages/Nav';
import Contact from './Components/Contact';
import Footer from './Pages/Footer';
import Comments from './Components/Comments';
import About from './Components/About';
import MainPage from './Pages/MainPage';
import Home from './Components/Home';
import CommentDetails from './Components/CommentDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/comments',
        loader:() => fetch('https://jsonplaceholder.typicode.com/comments'),
        element:<Comments></Comments>
      },
      {
        path:'/comment/:id',
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`),
        element:<CommentDetails></CommentDetails>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }  
    ]
  },
  {
    path: '/footer',
    element: <Footer></Footer>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
