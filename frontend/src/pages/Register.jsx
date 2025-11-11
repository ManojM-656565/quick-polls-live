import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore';

const Register = () => {
    const{register}=useAuthStore();
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        register(formData);
        setFormData({
            name:"",
            email:"",
            password:""
        })

    }
  return (

 <div className="flex justify-center items-center">
      <div className="w-full max-w-md border border-black bg-white rounded-lg p-6">
        <div className="text-center mb-6">
          
          <h1 className="text-2xl font-bold mt-2">Create Account</h1>
          <p className="text-gray-500">Get started with your free account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <div className="relative">
             
              <input
                type="text"
                className="w-full border p-2 pl-10 rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <div className="relative">
          
              <input
                type="email"
                className="w-full border p-2 pl-10 rounded"
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
                className="w-full border p-2 pl-10 rounded"
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

          <button type="submit" className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600" >
            Create
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register