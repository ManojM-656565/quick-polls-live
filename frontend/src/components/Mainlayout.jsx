import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <div className='min-h-screen bg-gray-200 text-black flex flex-col'>
        <Navbar/>
        <main className='flex-1 p-6'>
            <Outlet/>
        </main>

        <footer className="text-center py-3 bg-slate-800 text-sm text-gray-400">
        © {new Date().getFullYear()} Quick Polls Live
      </footer>
    </div>
  )
}

export default Mainlayout