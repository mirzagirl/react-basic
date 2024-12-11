import React, { useEffect, useState } from "react";
import useDebounceHook from "./useDedounceHook";
import useFocus from "./useFocus";
import useHover from "./useHover";

export default function App() {
  const [input, setInput] = useState("");
  const [ref, isFocused] = useFocus();
  const [refHo, isHovered] = useHover();
  const [debouncedValue] = useDebounceHook({ input });

  console.log("debounced  ", debouncedValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("hey ", input);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [input]);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
  }

  return (
    <div>
      <input ref={ref} onChange={handleChange} value={input} />
      <p>{isFocused ? "Focused" : "Not Focused"}</p>

      <div
        ref={refHo}
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: isHovered ? "lightblue" : "gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        Hover Me!!
      </div>

      <p>{isHovered ? "Hovered" : "Not Hovered"}</p>
    </div>
  );
}
