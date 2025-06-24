import { useState } from "react";
import { Child } from "../Child";

export const Parent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div> Parent : {inputValue && <p>Input Value: {inputValue}</p>}</div>
      <Child onChange={handleInputChange} />
    </div>
  );
};
