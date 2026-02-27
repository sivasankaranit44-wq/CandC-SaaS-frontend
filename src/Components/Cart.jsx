import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../Components/config/firebase";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  //environment variable for API base URL
  const API = import.meta.env.VITE_API_URL;

  // Fetch cart items for logged-in user
  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    axios.get(`${API}/cart/${uid}`)
      .then(res => setCart(res.data.items || []))
      .catch(err => console.error(err));
  }, []);

  // Remove item from cart
  const handleRemove = async (productId) => {
    const uid = auth.currentUser.uid;
    await axios.delete(`${API}/cart/${uid}/${productId}`);
    setCart(cart.filter(item => item.productId._id !== productId));
  };

  // Calculate total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  const proceedToCheckout = () => {
    navigate("/checkout", { state: { products: cart, totalAmount } });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.productId._id} className="bg-white p-4 rounded shadow-md mb-4">
              <h3 className="text-xl font-semibold">{item.productId.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.productId.price * item.quantity}</p>
              <button
                onClick={() => handleRemove(item.productId._id)}
                className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="bg-white p-4 rounded shadow-md mt-6">
            <h3 className="text-xl font-bold">Total: ₹{totalAmount}</h3>
            <button
              onClick={proceedToCheckout}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;