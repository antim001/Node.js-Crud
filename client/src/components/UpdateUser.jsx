import  { useState } from 'react';
import {useParams} from 'react-router-dom'
import { useEffect } from 'react';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const UpdateUser = () => {
  const users={
    fname:"",
    lname:"",
    email:""
  }
  const {id} =useParams();
  const [user,setUser]=useState(users)
  const navigate=useNavigate();
const inputChange=(e)=>{
  const {name,value}=e.target;
  setUser({...user,[name]:value})
  console.log(user);
}
  useEffect(()=>{
  axios.get(`http://localhost:8000/api/getone/${id}`)
  .then((response)=>{
 console.log(response.data)
 setUser(response.data)
  }).catch((error)=>{
    console.log(error)
  })
},[id])
const formSubmit = async (e) => {
  e.preventDefault();
 
     await axios.put(`http://localhost:8000/api/update/${id}`, user) 
     
   .then((response)=>{
      toast.success("data updated succesfully",{position:"top-right"})
      navigate('/')
   })
   
   .catch (error=>console.log(error))
    
  }

  return (
    <div className="container mx-auto mt-10 ">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900"> User</h2>
        <form onSubmit={formSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="fname"
              value={user.fname}
              onChange={inputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={user.lname}
              onChange={inputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={inputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
           Update
          </button>
        </form>
      </div>
    </div>
  );
};



export default UpdateUser
