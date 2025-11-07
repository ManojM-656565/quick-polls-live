import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import Mainlayout from './components/Mainlayout';
import Dashboard from './pages/Dashboard';
import Polls from './pages/Polls';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App(){
  return(
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<Mainlayout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/polls" element={<Polls/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}