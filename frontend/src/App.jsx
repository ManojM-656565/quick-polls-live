import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import Polls from './pages/Polls';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import ManagePoll from './pages/ManagePoll';
import Dashboard from './pages/Dashboard';

export default function App(){
  return(
    <BrowserRouter>
      <Toaster />
      <div className='min-h-screen flex flex-col'>
           <Navbar/>
           <main className='flex-1 p-6'>

      <Routes>
          <Route path="/manage" element={<ManagePoll/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/polls" element={<Polls/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

      </Routes>
          </main>
      </div>
    </BrowserRouter>
  )
}