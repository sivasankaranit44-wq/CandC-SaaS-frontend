import { useState, useEffect } from 'react';
import axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API}/services`)
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#222B40] py-12 px-6">
        <h1 className="text-4xl font-bold text-white text-center">
          Our Services
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-6">
        {services.map((s) => (
          <div key={s._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-600 text-xl">{s.name}</h3>
            <p className="text-gray-700 mt-2">{s.desc}</p>
            {s.price && <p className="text-lg font-bold mt-2">₹{s.price}</p>}
            {s.category && <p className="text-sm text-gray-500">Category: {s.category}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;