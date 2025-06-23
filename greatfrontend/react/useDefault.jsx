import React from "react";

export const useDefault = (defaultValue, initialValue) => {
  const [value, setValue] = React.useState(initialValue || defaultValue);
};
