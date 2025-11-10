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
   <nav className='text-black px-6 py-3 flex justify-between items-center'>
   <div className='flex items-center gap-8'>

    <Link to="/" className='text-2xl font-bold px-20'>
        Quick Polls Live
    </Link>
    <div className='flex gap-6 text-xl font-medium'>
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/polls'>Polls</Link>
    <Link to='/manage'>Manage Poll</Link>
    </div>
   </div>

    <div className='flex items-center gap-4'>
      {
        user?(
            <>
                <button onClick={handleLogout} className='bg-red-400 rounded-md p-2'>Logout</button>
                <p className='text-xl bg-gray-400 rounded-full p-2'>{(user.name)}</p>
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