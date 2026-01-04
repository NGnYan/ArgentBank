import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useAuth } from "../hooks/useAuth";
import "../styles/components/Navbar.css";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  let navItems;

  if (isAuthenticated) {
    navItems = (
      <>
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          {user?.firstName}
        </Link>
        <a className="main-nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </>
    );
  } else {
    navItems = (
      <Link className="main-nav-item" to="/login">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    );
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="ArgentBank Logo" />
      </Link>

      <div>{navItems}</div>
    </nav>
  );
}

export default Navbar;
