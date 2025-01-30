import React,{ useState, useEffect, useRef }  from "react";

export default function useOnClickOutside(callback) {
  const ref = useRef(null)

  useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        callback(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {// callback/cleanup to run every render. It's not a big deal ...
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, []);

    return ref
}