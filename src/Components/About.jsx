function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#222B40] py-12 px-6">
        <h1 className="text-4xl font-bold text-white text-center">
          About CandC E-Commerce Platform
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          CandC is dedicated to delivering cutting-edge SaaS solutions tailored
          for startups and multinational corporations. We specialize in helping
          businesses achieve their marketing and SaaS-related goals with a strong
          focus on SEO, branding, and content strategy.
        </p>

        <ul className="space-y-4">
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <span className="font-semibold text-blue-600">SEO Excellence:</span> 
            From SaaS SEO to programmatic SEO, we build powerful branding and
            content frameworks that drive visibility and growth.
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <span className="font-semibold text-blue-600">Web Development & Design:</span> 
            Whether you have a clear vision or are still exploring possibilities,
            we guide you every step of the way. Our websites are designed to be
            SEO-optimized, user-friendly, and visually engaging.
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <span className="font-semibold text-blue-600">Webflow Maintenance:</span> 
            We ensure your Webflow projects remain smooth, updated, and optimized
            for performance.
          </li>
          <li className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <span className="font-semibold text-blue-600">Mobile Applications:</span> 
            We craft interactive, user-friendly mobile apps that enhance customer
            engagement and deliver seamless experiences.
          </li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center">
          At CandC, even if you’re not sure what you need, you’re in the right
          hands. We listen, guide, and build solutions that align with your goals —
          helping your business grow with confidence.
        </p>
      </div>
    </div>
  );
}

export default About;
