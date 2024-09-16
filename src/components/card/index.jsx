import Alogo from "../../assets/aboutlogo.svg";
import "./card.css";

export function CardOne() {
  return (
    <div className="card">
      <img
        src={Alogo}
        alt="Logo"
        style={{
          margin: "0px 10px 0px 5px",
          maxHeight: "24px",
          maxWidth: "24px",
        }}
      />
      <div>
        <h4>Michael</h4>
        <span className="cardtxt">
          Michael is responsible for the technical development of our website.
        </span>
        <button className="btn">Lead Developer</button>
      </div>
    </div>
  );
}

export function CardTwo() {
  return (
    <div className="card">
      <img
        src={Alogo}
        alt="Logo"
        style={{
          margin: "0px 10px 0px 5px",
          maxHeight: "24px",
          maxWidth: "24px",
        }}
      />
      <div>
        <h4>James</h4>
        <span className="cardtxt">
          James oversees all content creation and curation on our platform.
        </span>
        <button className="btn">Content Director</button>
      </div>
    </div>
  );
}

export function CardThree() {
  return (
    <div className="card">
      <img
        src={Alogo}
        alt="Logo"
        style={{
          margin: "0px 10px 0px 5px",
          maxHeight: "24px",
          maxWidth: "24px",
        }}
      />
      <div>
        <h4>David</h4>
        <span className="cardtxt">
          David is responsible for our marketing efforts, focusing on promoting
          our brand.
        </span>
        <button className="btn">Marketing Manager</button>
      </div>
    </div>
  );
}
