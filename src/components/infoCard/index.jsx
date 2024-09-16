import { useContext } from "react";
import "./infoCard.css";
import { GlobalContext } from "../context";

function InfoCard(props) {
  const { isCountry } = useContext(GlobalContext);

  const info = props.data;
  const imageList = props.images;
  const con = Array.from(info);

  const citydata = Object.values(info);

  return !isCountry ? (
    <div className="toScroll">
      <div className="layout">
        {con.map((count) => (
          <div
            className="infoCard"
            key={count?.id}
            style={{
              backgroundImage: `url(${imageList[count?.id]})`,
              backgroundSize: "323px 240px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="infoCard-img"> </div>
            <div className="infoCard-info">
              <p className="infoTitle">{count?.name}</p>
              <span className="infoSubtitle">{count?.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="toScroll">
      <div className="main-heading">WELL KNOWN CITIES</div>
      <div className="layout">
        {citydata[2].map((count) => (
          <div
            className="infoCard"
            key={count?.id}
            style={{
              backgroundImage: `url(${imageList[count?.id]})`,
              backgroundSize: "323px 240px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="infoCard-img"> </div>
            <div className="infoCard-info">
              <p className="infoTitle">{count?.name}</p>
              <span className="infoSubtitle">{count?.description}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="main-heading">MAIN TOURSIT ATTRACTIONS</div>
      <div className="layout">
        {citydata[3].map((count) => (
          <div
            className="infoCard"
            key={count?.id}
            style={{
              backgroundImage: `url(${imageList[count?.id]})`,
              backgroundSize: "323px 240px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="infoCard-img"> </div>
            <div className="infoCard-info">
              <p className="infoTitle">{count?.name}</p>
              <span className="infoSubtitle">{count?.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoCard;
