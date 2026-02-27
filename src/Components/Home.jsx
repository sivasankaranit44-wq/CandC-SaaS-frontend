import { Navigate, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#222B40] py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Empowering Startups & Enterprises with SaaS and Marketing Solutions
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-200 mb-8">
          From SEO to web development, we craft digital experiences that drive
          growth
        </p>
        <button onClick={() => navigate("/contact")}   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
          Book a Call
        </button>
      </div>

      <div className="py-12 px-6 m-10 bg-gray-800 text-center rounded-lg shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          From:
        </h1>
        <p className="text-lg text-gray-200">Startup Freelancing site</p>
      </div>

      <div className="py-12 px-6 m-10 bg-[#583BAC] text-center rounded-lg shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">To:</h1>
        <ul className="space-y-4 text-lg text-gray-100">
          <li>- SaaS solutions designed to help every company grow smarter</li>
          <li>
            - Your partner in marketing, web development, and software
            innovation
          </li>
          <li>
            - Optimized SEO and intelligent analytics to unlock your site’s full
            potential
          </li>
        </ul>
      </div>

      <div className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#222B40] mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          To empower startups and enterprises with innovative SaaS solutions
          that combine marketing, web development, and software engineering. We
          aim to deliver measurable growth through data‑driven strategies,
          optimized SEO, and seamless digital experiences.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#222B40] mb-6">
          Our Vision
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          To become the trusted growth operating system for companies worldwide
          bridging strategy, execution, and AI powered scale. Our vision is to
          redefine how businesses achieve sustainable success by being the
          external GTM partner founders rely on more than building in-house
          teams.
        </p>
      </div>
    </div>
  );
}

export default Home;
