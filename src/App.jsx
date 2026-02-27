import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Casestudy from "./Components/Casestudy";
import Products from "./Components/Products";
import Dashboard from "./Components/Dashboard";
import Checkout from "./Components/Checkout";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Protectedroute from "./Components/Protectedroute";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="container mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/checkout" element={<Checkout />}/> */}
          <Route path="/casestudy" element={<Casestudy />} />

          {/* adding Protectedroute for ONLY logged in users */}
          <Route
            path="/dashboard"
            element={
              <Protectedroute>
                <Dashboard />
              </Protectedroute>
            }
          />

          <Route
          path="/cart"
          element={
            <Protectedroute>
              <Cart />
            </Protectedroute>
          }
        />

        <Route
            path="/checkout"
            element={
              <Protectedroute>
                <Checkout />
              </Protectedroute>
            }
          />
        </Routes>

      
      </main>

      <Footer />
    </div>
  );
}

export default App;
