import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1>
              Power
        </h1>

        <ul className="nav-links">

          <li>
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link">
              Kontakta Oss
            </NavLink>
          </li>

        </ul>

      </div>
    </div>
  );
};
