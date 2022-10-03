import { NavLink } from "react-router-dom";
import "./Header.scss";
import Button from "../Button";

function Header() {
  return (
    <header>
      <div className="logo-header">
        <NavLink to="/">
          <h3>./prototurk</h3>
        </NavLink>
        <NavLink to="/" rel="noreferrer" target="_blank">
          <span>v2.5.1</span>
        </NavLink>
      </div>

      <form className="header-seacrh">
        <input type="search" placeholder="Search" />
      </form>

      <div className="header-user">
        <NavLink to="/login">
          <Button title="Login" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
