import { useNavigate } from "react-router-dom";

const Sidenav = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <section>
      <div className="bg-gray-100  fixed w-72 h-screen font-bold z-10">
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>

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
