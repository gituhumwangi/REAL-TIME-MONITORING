import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const [textColor, setTextColor] = useState("text-white");

  const handleNav = () => {
    setNav(!nav);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(entry.target).backgroundColor;
            setTextColor(bgColor === "rgb(0, 0, 0)" ? "text-black" : "text-white"); 
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-grey-900 bg-opacity-300 text-white h-16 flex items-center justify-between px-4 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ zIndex: 100 }} // Fixed position and high z-index
    >
      {/* <Link to="/" className="text-3xl font-bold text-white ml-4">
        Logo
      </Link> */}

      <button onClick={() => navigate("/")} className='text-3xl font-bold text-white ml-4'>VivaMetrics</button>

    
      <ul className="hidden md:flex space-x-8 items-center">
        {/* About Us Link with hover effect */}
        <li className="relative group">
          {/* <Link to="/aboutus" className="inline-block pb-1 hover:text-gray-300">
            About Us
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link> */}

          <button onClick={() => navigate("/aboutus")} className='inline-block pb-1 hover:text-gray-300'>About Us</button>
        </li>

        <li className="relative group">
          <Link to="/donortrends" className="inline-block pb-1 hover:text-gray-300">
            Donor Trends
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

        <li className="relative group">
          <Link to="/economicinfo" className="inline-block pb-1 hover:text-gray-300 ">
            Economic Info
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </li>

<li className="relative group">
  <button className="bg-white text-green-600 px-4 py-2 rounded-lg transition duration-300">
    Register
  </button>
  <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-48">
    <Link to="/signup/donor" className="block px-4 py-2">
      Donor
    </Link>
    <Link to="/signup/ia" className="block px-4 py-2">
      IA
    </Link>
    <Link to="/signup/beneficiary" className="block px-4 py-2">
      Beneficiary
    </Link>
  </div>
</li>
      </ul>


      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-green-700 text-white transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500`}
      >
        <li className="p-4 border-b border-gray-600">
          <Link to="/" className="text-3xl font-bold">
            Logo
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/aboutus" className="hover:bg-green-500 p-2 rounded">About Us</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/services" className="hover:bg-green-500 p-2 rounded">Services</Link>
        </li>
        {/* Mobile Dropdown for Register */}
        <li className="p-4 border-b border-gray-600 relative group">
          <span className="hover:bg-green-500 p-2 rounded">Register</span>
          <ul className="absolute hidden group-hover:block bg-green-500 w-full left-0">
            <li className="p-4 border-b border-gray-600">
              <Link to="/login/donor">Donor</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/login/ia">Implementing Agency</Link>
            </li>
            <li className="p-4">
              <Link to="/login/beneficiary">Beneficiary</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
