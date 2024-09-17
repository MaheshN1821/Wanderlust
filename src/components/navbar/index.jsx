import { useNavigate } from "react-router-dom";
import "./navStyle.css";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../context";

const Container = styled.div`
  p {
    @media screen and (max-width: 680px) {
      margin: 4px 10px;
      font-size: 1.1rem;
      font-weight: 300;
    }
  }
`;

function Navbar() {
  const {
    setPName,
    setPlaceName,
    setCountryData,
    setTempleData,
    setBeachData,
    setIsCountry,
  } = useContext(GlobalContext);

  const Navigate = useNavigate();

  function handleClear() {
    setBeachData(""),
      setCountryData(""),
      setPlaceName(""),
      setTempleData(""),
      setPName(""),
      setIsCountry(false);
    Navigate("/explore");
  }

  return (
    <Container>
      <div className="container">
        <p onClick={() => Navigate("/")} className="onlyNav">
          Home
        </p>
        <p onClick={() => Navigate("/about")} className="onlyNav">
          About
        </p>
        <p onClick={() => Navigate("/contact")} className="onlyNav">
          Contact
        </p>
        <p onClick={handleClear} className="onlyNav">
          Explore
        </p>
      </div>
    </Container>
  );
}

export default Navbar;
