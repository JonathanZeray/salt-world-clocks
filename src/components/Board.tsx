import { useState } from "react";
import { WorldClocks } from "./WorldClocks";

export const Board: React.FC = () => {
  const [timeZones, setTimeZones] = useState([
    { city: "Stockholm", timeZone: "Europe/Stockholm" },
    { city: "London", timeZone: "Europe/London" },
    { city: "Paris", timeZone: "Europe/Paris" },
    { city: "Moscow", timeZone: "Europe/Moscow" },
    { city: "Tokyo", timeZone: "Asia/Tokyo" },
    { city: "New York", timeZone: "America/New_York" },
    { city: "Los Angeles", timeZone: "America/Los_Angeles" },
    { city: "Sao Paulo", timeZone: "America/Sao_Paulo" },
  ]);

  const [newTimeZone, setNewTimeZone] = useState("");

  const handleAddTimeZone = () => {
    if (newTimeZone.trim() !== "") {
      setTimeZones([
        ...timeZones,
        { city: newTimeZone.split("/")[1], timeZone: newTimeZone },
      ]);
      setNewTimeZone("");
    }
  };

  return (
    <>
      <div className="board__container">
        <WorldClocks timeZones={timeZones} />
      </div>
      <div className="board__container-input-container">
        <input
          type="text"
          value={newTimeZone}
          onChange={(e) => setNewTimeZone(e.target.value)}
          placeholder="Use Continent/City when writing"
        />
        <button onClick={handleAddTimeZone}>Add new time zone</button>
      </div>
    </>
  );
};

/* 
Stockholm
London
Paris
Moscow
Tokyo
New York
Los Angeles
Sao Paulo
*/
