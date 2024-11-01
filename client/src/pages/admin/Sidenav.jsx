import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import "./sidenav.css";

const Sidenav = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <section>
      <div className="bg-gray-100  fixed w-72 h-screen font-bold z-10 flex flex-col justify-between items-center pb-5 pt-5">
        <ul className="sidenav">
          <Link to="/dashboard">
            <li className="text-lg">
              <MdDashboard />
              Dashboard
            </li>
          </Link>
          <Link to="/dashboard/products">
            <li className="text-lg">
              <MdOutlineProductionQuantityLimits />
              Products
            </li>
          </Link>
          <Link to="/dashboard/orders">
            <li className="text-lg">
              <IoMdCart />
              Order
            </li>
          </Link>
          <Link to="/dashboard/users">
            <li className="text-lg">
              <BiSolidUser />
              Users
            </li>
          </Link>
        </ul>

        <div>
          <button onClick={logout} className="btn btn-warning">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
