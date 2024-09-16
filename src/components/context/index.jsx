import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [pName, setPName] = useState("");
  const [isCountry, setIsCountry] = useState(false);
  const [placeName, setPlaceName] = useState("");
  const [countryData, setCountryData] = useState("");
  const [templeData, setTempleData] = useState("");
  const [beachData, setBeachData] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        pName,
        setPName,
        placeName,
        setPlaceName,
        countryData,
        setCountryData,
        templeData,
        setTempleData,
        beachData,
        setBeachData,
        isCountry,
        setIsCountry,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
