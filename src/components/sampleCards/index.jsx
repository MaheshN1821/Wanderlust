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
            <div className="hangText">TEMPLES</div>
            <button className="containerBtn hangText" onClick={handleTemple}>
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
            <div className="hangText">BEACHES</div>
            <button className="containerBtn hangText" onClick={handleBeach}>
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
            <div className="hangText">PLACES</div>
          </div>
        </div>
        <div className="forPosition">
          <div className="hanging" id="hang">
            <span className="hangText increaseFont">
              Search for these places above!
            </span>
            <ol>
              <li className="hangText">India</li>
              <li className="hangText">Japan</li>
              <li className="hangText">Italy</li>
              <li className="hangText">Australia</li>
              <li className="hangText">Brazil</li>
              <li className="hangText">France</li>
              <li className="hangText">Germany</li>
              <li className="hangText">Spain</li>
              <li className="hangText">United States</li>
              <li className="hangText">United Kingdom</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleCard;
