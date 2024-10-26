import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <header className="text-gray-600 body-font" id="#">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <FaShoppingCart className="text-3xl text-yellow-500" />
          <span className="ml-3 text-xl font-bold">V.Store</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 hover:text-gray-900 font-medium">
            Home
          </a>
          <a href="#menu" className="mr-5 hover:text-gray-900 font-medium">
            Menu
          </a>
          <a href="#about" className="mr-5 hover:text-gray-900 font-medium">
            About
          </a>
          <a href="#blog" className="mr-5 hover:text-gray-900 font-medium">
            Blog
          </a>
        </nav>
        <button className="btn btn-warning font-bold text-base ">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
