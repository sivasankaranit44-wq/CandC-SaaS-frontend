import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from "../Components/config/firebase";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  //env variable for localhost
  const API = import.meta.env.VITE_API_URL;

  // Fetch products from backend
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Group products by category
  const grouped = products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  // Add to Cart handler
  const handleAddToCart = async (product) => {
    const uid = auth.currentUser?.uid;
    if (!uid) {
      alert("Please login to add items to cart");
      return;
    }

    try {
      console.log("Adding to cart:", product); // Debug log
      await axios.post(`${API}/cart/${uid}`, {
        productId: product._id,
        quantity: 1,
      });
      alert(`${product.name} added to cart!`);
    } catch (err) {
      console.error("Cart error:", err.response?.data || err.message);
      alert("Failed to add item to cart");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="px-6 py-12 bg-[#222b40]">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Our Products
        </h2>
      </div>

      {/* Product categories */}
      {Object.keys(grouped).map((category) => (
        <div key={category}>
          <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
            {category}
          </h3>

          {grouped[category].map((p) => (
            <div
              key={p._id}
              className="mt-5 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-blue-600">{p.name}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
              <p className="text-2xl font-bold mt-4">₹{p.price}</p>

              {/* Buy Now */}
              <button
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      products: [
                        {
                          productId: p._id,
                          price: p.price,
                          quantity: 1,
                        },
                      ],
                      totalAmount: p.price,
                    },
                  })
                }
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                Buy Now
              </button>

              {/* Add to Cart */}
              <button
                onClick={() => handleAddToCart(p)}
                className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      ))}

      {/* CTA */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center mt-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Confused on what to select? Book a{" "}
          <span className="font-semibold text-blue-600">Free Call</span> and our
          team will get in touch with you.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Book a Call
        </button>
      </div>
    </div>
  );
}

export default Products;