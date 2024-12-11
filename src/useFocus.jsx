import React, { useEffect, useState, useRef } from "react";

export default function useFocus() {
  const ref = useRef(null); // Initialize with null for DOM elements
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const handleFocus = () => setIsFocused(true);
      const handleBlur = () => setIsFocused(false);

      element.addEventListener("focus", handleFocus);
      element.addEventListener("blur", handleBlur);

      // Cleanup
      return () => {
        element.removeEventListener("focus", handleFocus);
        element.removeEventListener("blur", handleBlur);
      };
    }
  }, []); // Empty dependency array ensures the effect runs once

  return [ref, isFocused];
}
