import { useEffect, useRef } from "react";

function useClickOutside(handler, toggleButtonRef) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const maybeHandler = (event) => {
      // Check if the click is outside the dropdown and the toggle button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler, toggleButtonRef]);

  return dropdownRef;
}

export default useClickOutside;
