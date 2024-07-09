import React from "react";
import { WorldClocks } from "./WorldClocks";

export const Board: React.FC = () => {
  return (
    <>
      <div className="board__container">
        <WorldClocks />
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
