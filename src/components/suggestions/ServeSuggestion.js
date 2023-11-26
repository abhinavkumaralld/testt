import React, { useEffect, useState } from "react";
import Temp from "../tempdata/Temp";
import SuggestionCard from "./SuggestionCard";
import SuggestionBar from "./SuggestionBar";

const SurveSuggestion = () => {
  const [suggvideos, setsuggvideos] = useState([]);

  useEffect(() => {
    setsuggvideos(Temp.items);
  }, []);

  return (
    <div style={{ display: "flex", margin: "16px", flexDirection: "column" }}>
      <div style={{ marginBottom: "0.75rem" }}>
        <SuggestionBar />
      </div>
      {suggvideos.map((val, ind) => (
        <SuggestionCard key={val.id} videoCard={val}></SuggestionCard>
      ))}
    </div>
  );
};

export default SurveSuggestion;
