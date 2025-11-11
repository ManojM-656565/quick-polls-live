import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const {login} =useAuthStore();
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        login(formData);
        setFormData({
            email:"",
            password:"",
        })
        navigate('/')
    }
  return (
  <div className="flex justify-center items-center">
      <div className="w-full max-w-md border border-black bg-white rounded-lg p-8">
        <div className="text-center mb-6">
          
          <h1 className="text-2xl font-bold mt-2">Log In</h1>
          <p className="text-gray-500">Get started </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
        

          <div>
            <label className="block font-medium">Email</label>
            <div className="relative">
          
              <input
                type="email"
                className="w-full border p-2 rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <div className="relative">
           
              <input
                type={"text"}
                className="w-full border p-2 rounded"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-3 top-3"
              >
              </button>
            </div>
          </div>

          <button type="submit" className="w-full bg-red-500 text-white py-2 rounded" >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-500">
            Didn't have an account?{' '}
            <Link to="/register" className="text-red-500">
              Creat Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login