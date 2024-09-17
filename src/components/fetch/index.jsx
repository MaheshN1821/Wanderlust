import { useContext } from "react";
import { GlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import "./fetchin.css";

function Data() {
  const {
    pName,
    setPName,
    setPlaceName,
    setCountryData,
    setTempleData,
    setBeachData,
    setIsCountry,
  } = useContext(GlobalContext);

  const Navigate = useNavigate();

  function handleChange(e) {
    setPName(e.target.value);
  }

  function handleClick() {
    const alteredName = pName.toLowerCase();
    setPName(alteredName);
    Navigate("/explore/result");
  }

  function handleClear() {
    setBeachData(""),
      setCountryData(""),
      setPlaceName(""),
      setTempleData(""),
      setPName(""),
      setIsCountry(false);
  }

  return (
    <div className="inbtnback">
      <input
        className="usrin"
        onChange={handleChange}
        type="text"
        name="placeName"
        id="placeName"
        placeholder="Enter Place Name: "
        value={pName}
      />
      <div>
        <button id="toclear" onClick={handleClick} className="searchbtn">
          Search
        </button>
        <button onClick={handleClear} className="searchbtn">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Data;
