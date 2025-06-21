import React from "react";

export const useClickAnywhere = (handler) => {
  useEffect(() => {
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
};
