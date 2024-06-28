import React from 'react'
import ReactDOM from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import User from './components/User';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
const router = createBrowserRouter([
  {
    path: "/",
    element: <User/>,
  },
  {
    path:"/adduser",
    element:<AddUser/>
  },
  {
    path:"/update/:id",
    element:<UpdateUser/>
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
<Toaster/>
  </React.StrictMode>,
)
