import { useContext } from "react";
import "./content.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context";

function Content() {
  const {
    setPName,
    setPlaceName,
    setCountryData,
    setTempleData,
    setBeachData,
    setIsCountry,
  } = useContext(GlobalContext);

  const Navigate = useNavigate();

  function handleHomePageNav() {
    setBeachData(""),
      setCountryData(""),
      setPlaceName(""),
      setTempleData(""),
      setPName(""),
      setIsCountry(false);
    Navigate("/explore");
  }

  return (
    <div className="content">
      <h1 className="headtxt onlyHead">DISCOVER YOUR NEXT ADVENTURE!</h1>
      <span className="spantxt">
        Uncover hidden gems and top destinations curated just for you. Let us
        guide you to new experiences and unforgettable memories, whether you're
        planning a weekend getaway or a global expedition.
      </span>
      <button className="homePageBtn onlyHead" onClick={handleHomePageNav}>
        Explore!
      </button>
    </div>
  );
}

export default Content;
