import React, { useState, useEffect } from "react";

export default function TrafficLight() {
  const trafficSignals = {
    red: {
      next: "yellow",
      color: "red",
      time: 4000,
    },
    yellow: {
      next: "green",
      color: "yellow",
      time: 5000,
    },
    green: {
      next: "red",
      color: "green",
      time: 3000,
    },
  };
  const [currentActive, setCurrentActive] = useState("red");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentActive(trafficSignals[currentActive].next);
    }, trafficSignals[currentActive].time);
    return () => clearTimeout(timeout);
  }, [currentActive]);

  return (
    <div>
      Render your Traffic Light here.
      <p>Red</p>
      {currentActive === "red" && (
        <div
          style={{
            background: "red",
            opacity: 1,
            height: "10px",
            width: "10px",
            borderRadius: "5px",
            border: "1px red dotted",
          }}
        ></div>
      )}
      <p>Yellow</p>
      {currentActive === "yellow" && (
        <div
          style={{
            background: "yellow",
            opacity: 1,
            height: "10px",
            width: "10px",
            borderRadius: "5px",
            border: "1px yellow dotted",
          }}
        ></div>
      )}
      <p>Green</p>
      {currentActive === "green" && (
        <div
          style={{
            background: "green",
            opacity: 1,
            height: "10px",
            width: "10px",
            borderRadius: "5px",
            border: "1px green dotted",
          }}
        ></div>
      )}
    </div>
  );
}
