import React, { useState, useEffect } from "react";

function ProgressBar({ onLoad }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const onLoad = async () => {
      // Simulate an API call with a random completion time
      return new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 10000 + 1000),
      );
    };
    // This example assumes it could take up to 10 seconds for the API to respond,
    // which is arbitrary and can be adjusted based on expected API latency.
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage < 90) {
          return prevPercentage + 1; // Slow increment, never reaches 100%
        }
        return prevPercentage;
      });
    }, 100);

    onLoad().then(() => {
      setPercentage(100); // Set to 100% once the API call finishes
      clearInterval(interval);
    });

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [onLoad]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {percentage < 100 ? `${percentage}%` : "Complete!"}
      </div>
    </div>
  );
}

function App() {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    setBars((prevBars) => [...prevBars, <ProgressBar key={prevBars.length} />]);
  };

  return (
    <div className="container">
      <button onClick={addProgressBar}>Add</button>
      {bars}
    </div>
  );
}

export default App;
