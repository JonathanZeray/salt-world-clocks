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

interface WorldClocksProps {
  timeZones: { city: string; timeZone: string }[];
}

export const WorldClocks: React.FC<WorldClocksProps> = ({ timeZones }) => {
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
