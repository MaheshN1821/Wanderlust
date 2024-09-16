import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context";
import InfoCard from "../infoCard";

function GettingDataTwo() {
  const { placeName, countryData, templeData, beachData, setIsCountry } =
    useContext(GlobalContext);

  const [mainData, setMainData] = useState("");
  const [err, setErr] = useState(false);
  const [errData, setErrData] = useState("");
  const [counter, setCounter] = useState(0);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    try {
      let dataToSet = "";
      let img = [];

      if (templeData) {
        for (let i = 1; i <= 16; i++) {
          img[i] = new URL(
            `../../assets/images/temples/temple${i}.jpg`,
            import.meta.url
          ).href;
        }
        setImageData(img);
        dataToSet = templeData;
        setIsCountry(false);
      } else if (beachData) {
        for (let i = 1; i <= 16; i++) {
          img[i] = new URL(
            `../../assets/images/beaches/beach${i}.jpg`,
            import.meta.url
          ).href;
        }
        setImageData(img);
        dataToSet = beachData;
        setIsCountry(false);
      }

      const placeArr = [
        "india",
        "australia",
        "japan",
        "brazil",
        "italy",
        "united states",
        "unitedstates",
        "france",
        "spain",
        "germany",
        "united kingdom",
        "unitedkingdom",
        "temple",
        "beach",
        "country",
      ];
      const value = placeArr.find((place) => place === placeName);

      if (!value) {
        setCounter(counter + 1);
        setErr(true);
        setErrData(
          "Details for the entered Place is not available at the moment! Try searching for a different Place"
        );
        return;
      }

      if (counter === 1) {
        setErr(false);
      }

      const convArr = Object.values(countryData);

      const countryDetails = convArr.find(
        (country) => country.name === placeName
      );

      if (countryDetails) {
        for (let i = 1; i <= 8; i++) {
          img[i] = new URL(
            `../../assets/images/${placeName}/image${i}.jpg`,
            import.meta.url
          ).href;
        }
        setImageData(img);
        dataToSet = countryDetails;
        setIsCountry(true);
      } else if (!dataToSet) {
        dataToSet = "notFound";
      }

      setMainData(dataToSet);
    } catch (error) {
      console.log(error);
      setErr(true);
      setErrData("Place Not Found!");
    }
  }, [placeName, countryData, templeData, beachData]);

  if (mainData === "notFound") {
    return <h1>Use any other Keyword</h1>;
  }

  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "20px" }}>
      {err ? (
        <h1
          style={{
            textAlign: "center",
            maxWidth: "600px",
            backgroundColor: "rgba(0, 0, 0, 0.616)",
            padding: "10px",
          }}
        >
          {errData}
        </h1>
      ) : (
        <InfoCard data={mainData} images={imageData} />
      )}
    </div>
  );
}

export default GettingDataTwo;
