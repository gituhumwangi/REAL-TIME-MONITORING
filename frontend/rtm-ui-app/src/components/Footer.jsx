const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Viva Metrics. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;
  