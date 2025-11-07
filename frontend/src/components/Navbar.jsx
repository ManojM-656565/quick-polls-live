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
   <nav className='bg-gray-500 text-black px-6 py-3 flex justify-between items-center'>
    <Link to="/" className='text-2xl font-bold'>
        Quick Polls Live
    </Link>

    <div className='flex items-center gap-4'>
      {
        user?(
            <>
                <p className='text-sm'>Hi, {user.name}</p>
                <Link to="/polls"
                className=''
                >Polls</Link>
                <button onClick={handleLogout}>Logout</button>
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