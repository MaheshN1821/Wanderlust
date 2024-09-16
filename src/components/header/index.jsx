import logo from "../../assets/logo.svg";
import "./header.css";

function Header() {
  return (
    <div className="head">
      <img src={logo} alt="Logo" />
      <p className="txt">Wanderlust</p>
    </div>
  );
}

export default Header;
