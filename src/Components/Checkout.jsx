import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { auth } from "../Components/config/firebase";

function Checkout() {
  const location = useLocation();
  const products = location.state?.products || [];
  const totalAmount = location.state?.totalAmount || 0;

  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser?.uid;

    if (!uid) {
      alert("Please login before placing an Order");
      return;
    }

    try {
      // Step 1: Create Razorpay order
      const { data: order } = await axios.post(
        `${import.meta.env.VITE_API_URL}/orders/create-order`,
        { amount: totalAmount }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "CandC",
        description: "Order Payment",
        order_id: order.id,
        handler: async function (response) {
          try {
            // Step 2: Save order as pending
            await axios.post(`${import.meta.env.VITE_API_URL}/orders`, {
              ...form,
              userId: uid,
              products: products.map((item) => ({
                productId: item.productId?._id || item.productId || item._id,
                price: item.productId?.price || item.price,
                quantity: item.quantity || 1,
              })),
              totalAmount,
              status: "pending",
              razorpay_order_id: response.razorpay_order_id,
            });

            // Step 3: Verify payment
            await axios.post(`${import.meta.env.VITE_API_URL}/orders/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            alert("Payment Successful! Our Team will connect with you soon.");
            setForm({ name: "", email: "", address: "" });
          } catch (err) {
            console.error(err);
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: "9988776655",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment Failed! We've booked a call with you.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#222B40] mb-6 text-center">
          Checkout
        </h1>

        <h2 className="text-lg font-semibold mb-4">Your Cart:</h2>
        {products.map((item, i) => (
          <p key={i}>
            {(item.productId?.name || item.name)} - ₹
            {(item.productId?.price || item.price)} × {(item.quantity || 1)}
          </p>
        ))}

        <h3 className="text-xl font-bold mt-4">Total: ₹{totalAmount}</h3>

        <form className="space-y-6 mt-6" onSubmit={handlePayment}>
          <input
            type="text"
            name="name"
            placeholder="Fullname"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email id"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          />

          <textarea
            name="address"
            placeholder="Your Business/Company Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;