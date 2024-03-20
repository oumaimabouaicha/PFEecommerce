import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Listarticles from './components/articlesRedux/Listarticles';
 import './App.css';
import Cart from './components/articlesRedux/Cart';
import NavScroll from './components/NavScroll';
import "bootstrap/dist/css/bootstrap.min.css";

import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import { ToastContainer } from 'react-toastify';
import Login from "./admin/Login"
import Logout from "./admin/Logout"
import Register from "./admin/Register"

import { useSelector } from "react-redux";
import ProtectedRoutes from './components/ProtecteRoutes';
function App() {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return (
    <>
    
    <ToastContainer/>
    <Router>
  
      <NavScroll/>
    <Routes>
      
       <Route path='/articles' element={<Listarticles/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>


       <Route path="/Login" element={<Login/>}/>
       <Route path="/Logout" element={<Logout/>}/>
       <Route path="/register" element={<Register/>}/>
       
       </Routes>
       </Router>
    </>
  )
}

export default App
