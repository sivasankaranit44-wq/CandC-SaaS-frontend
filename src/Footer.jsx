import logo from './assets/logo.png'
function Footer() {
  return (
    <footer className="bg-[#222B40] text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
    
        <div className="flex items-center space-x-2">
          <img 
            src={logo}
            alt="CandC Logo" 
            className="h-8 w-auto"
          />
          <span className="font-semibold">CandC</span>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/" className="hover:text-indigo-400">Home</a>
          <a href="/casestudy" className="hover:text-indigo-400">Case Studies</a>
          <a href="/products" className="hover:text-indigo-400">Products</a>
          <a href="/contact" className="hover:text-indigo-400">Contact</a>
        </div>

        <p className="text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} CandC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;