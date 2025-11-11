import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Link ,useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    const {user,logout}=useAuthStore();
    const handleLogout=()=>{
        navigate('/login');
        logout();
    }
  return (
   <nav className='text-black px-6 py-3 m-8 flex justify-between items-center bg-gray-300 shadow-lg rounded-2xl'>
   <div className='flex items-center gap-8'>

    <Link to="/" className='text-2xl font-bold px-20'>
        Quick Polls Live
    </Link>
    <div className='flex gap-6 font-medium'>
    <Link to='/dashboard' className='hover:underline'>Dashboard</Link>
    <Link to='/polls' className='hover:underline'>Polls</Link>
    <Link to='/manage' className='hover:underline'>Manage Poll</Link>
    </div>
   </div>

    <div className='flex items-center gap-4'>
      {
        user?(
            <>
                <button onClick={handleLogout} className='bg-gray-800 text-white text-bold border border-black p-2 rounded-md'>Logout</button>
                <p className='text-xl bg-red-400 border border-black rounded-full w-12 h-12 flex items-center justify-center'>{user.name.charAt(0).toUpperCase()}</p>
            </>
        ):(
            <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </>
        )
      }

    </div>
   </nav>
  )
}

export default Navbar