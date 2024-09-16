import "./sampleCards.css";
import beach from "../../assets/images/beaches/beach1.jpg";
import temple from "../../assets/images/temples/temple6.jpg";
import place from "../../assets/images/italy/image6.jpg";
import { useContext } from "react";
import { GlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

function SampleCard() {
  const { setPName } = useContext(GlobalContext);
  const Navigate = useNavigate();

  function handleTemple() {
    setPName("temple");
    Navigate("/explore/result");
  }

  function handleBeach() {
    setPName("beach");
    Navigate("/explore/result");
  }

  function handleHover() {
    document.getElementById("hang").style.opacity = 1;
  }

  function handleOut() {
    document.getElementById("hang").style.opacity = 0;
  }

  return (
    <div className="containerOne">
      <div className="extra1">
        <div
          className="box-container"
          style={{
            backgroundImage: `url(${temple})`,
            backgroundSize: "300px 290px",
          }}
        >
          <div className="to-display">
            <div>TEMPLES</div>
            <button className="containerBtn" onClick={handleTemple}>
              Explore
            </button>
          </div>
        </div>
        <div
          className="box-container"
          style={{
            backgroundImage: `url(${beach})`,
            backgroundSize: "330px 290px",
          }}
        >
          <div className="to-display">
            <div>BEACHES</div>
            <button className="containerBtn" onClick={handleBeach}>
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="extra2">
        <div
          className="box-container"
          id="toDisplayPlaces"
          style={{
            backgroundImage: `url(${place})`,
            backgroundSize: "330px 290px",
          }}
          onMouseOver={handleHover}
          onMouseOut={handleOut}
        >
          <div className="to-display">
            <div>PLACES</div>
          </div>
        </div>
        <div className="forPosition">
          <div className="hanging" id="hang">
            <span>Search for these places above!</span>
            <ol>
              <li>India</li>
              <li>Japan</li>
              <li>Italy</li>
              <li>Australia</li>
              <li>Brazil</li>
              <li>France</li>
              <li>Germany</li>
              <li>Spain</li>
              <li>United States</li>
              <li>United Kingdom</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleCard;
