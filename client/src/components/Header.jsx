import { MdFastfood } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font" id="#">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <MdFastfood className="text-4xl text-warning" />
            <h1 className="ml-3 text-4xl font-bold text-warning">VFood</h1>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
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
          <div className="input input-bordered flex items-center gap-2">
            <input type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <IoCartOutline className="mx-5 text-3xl" />

          <Link to="/login">
            <button className="btn btn-warning  text-gray-800"> Sign In</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
