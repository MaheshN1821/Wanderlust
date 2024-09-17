import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import GettingDataTwo from "./use-fetch-2";

function GettingDataOne() {
  const { pName, setPlaceName, setCountryData, setTempleData, setBeachData } =
    useContext(GlobalContext);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch("/information/info.json");
        const result = await response.json();

        if (pName === "temple" || pName === "temples" || pName === "temp") {
          setPlaceName("temple");
          setTempleData(result.temples);
        } else if (
          pName === "beach" ||
          pName === "beaches" ||
          pName === "beac"
        ) {
          setPlaceName("beach");
          setBeachData(result.beaches);
        } else {
          setPlaceName(pName);
          setCountryData(result.countries);
        }
      } catch (error) {
        setError(error);
      }
    }

    fetching();
  }, [pName]);

  if (error) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GettingDataTwo />
    </div>
  );
}

export default GettingDataOne;
