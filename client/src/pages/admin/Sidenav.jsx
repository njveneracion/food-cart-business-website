import { useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineProductionQuantityLimits,
  MdFastfood,
} from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <section>
      <div className="bg-warning fixed w-72 h-screen font-bold z-10 flex flex-col  items-center pb-5 pt-5">
        <div className="flex title-font font-medium items-center text-gray-900 mb-6 md:mb-7">
          <MdFastfood className="text-4xl text-gray-800" />
          <h1 className="ml-3 text-4xl font-bold text-gray-800">VFood</h1>
        </div>

        <div className="mb-6 flex flex-col items-center gap-5">
          <div className="ring-primary ring-offset-base-100 w-24 ring ring-offset-2 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="avatar pic"
              className="rounded-full"
            />
          </div>
          <h1>Administrator</h1>
        </div>

        <ul className="sidenav flex flex-col items-center w-full">
          <Link to="/dashboard" className="w-full">
            <li className="text-lg flex items-center gap-2 p-3 hover:bg-yellow-200 rounded-md">
              <MdDashboard />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/dashboard/products" className="w-full">
            <li className="text-lg flex items-center gap-2 p-3 hover:bg-yellow-200 rounded-md">
              <MdOutlineProductionQuantityLimits />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/dashboard/orders" className="w-full">
            <li className="text-lg flex items-center gap-2 p-3 hover:bg-yellow-200 rounded-md">
              <IoMdCart />
              <span>Order</span>
            </li>
          </Link>
          <Link to="/dashboard/users" className="w-full">
            <li className="text-lg flex items-center gap-2 p-3 hover:bg-yellow-200 rounded-md">
              <BiSolidUser />
              <span>Users</span>
            </li>
          </Link>
        </ul>

        <div className="absolute bottom-10">
          <button onClick={logout} className="btn btn-error">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
