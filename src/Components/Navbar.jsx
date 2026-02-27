import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../Components/config/firebase"


function Navbar() {
// creating user 
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
      setUser(currentuser)
    })
    return()=> unsubscribe()
  },[])

  const handleLogout = async()=>{
    await signOut(auth)
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        
        <div className="flex items-center space-x-2">
          <img src={logo} alt="CandC Logo" className="h-8 w-auto" />
          <h2 className="text-2xl font-bold text-blue-600">CandC</h2>
        </div>

        
        <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-center">
          <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
          <li><Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
          <li><Link to="/casestudy" className="hover:text-blue-600 transition-colors">Case Studies</Link></li>

           {user ? (
            <>
              <li><Link to="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link></li>
              <li><Link to="/cart" className="hover:text-blue-600 transition-colors">🛒 Cart</Link></li>

              <li><button onClick={handleLogout} className="hover:text-blue-600 transition-colors">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/signup" className="hover:text-blue-600 transition-colors">Sign Up</Link></li>
              <li><Link to="/login" className="hover:text-blue-600 transition-colors">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;