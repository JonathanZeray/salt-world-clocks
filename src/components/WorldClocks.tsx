import { useState, useEffect } from "react";
import { Clock } from "./Clock";

const getTimeForTimeZone = (timeZone: string): string => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZone,
  }).format(new Date());
};

const timeZones = [
  { city: "Stockholm", timeZone: "Europe/Stockholm" },
  { city: "London", timeZone: "Europe/London" },
  { city: "Paris", timeZone: "Europe/Paris" },
  { city: "Moscow", timeZone: "Europe/Moscow" },
  { city: "Tokyo", timeZone: "Asia/Tokyo" },
  { city: "New York", timeZone: "America/New_York" },
  { city: "Los Angeles", timeZone: "America/Los_Angeles" },
  { city: "Sao Paulo", timeZone: "America/Sao_Paulo" },
];

export const WorldClocks: React.FC = () => {
  const [, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {timeZones.map(({ city, timeZone }) => (
        <Clock key={city} time={getTimeForTimeZone(timeZone)} city={city} />
      ))}
    </>
  );
};
