// https://www.greatfrontend.com/questions/javascript/use-toggle

// Implement a useToggle hook that manages a boolean toggle state in React components.

// export default function Component() {
//   const [value, toggle, setValue] = useToggle();

//   return (
//     <div>
//       <p>Enabled: {enabled ? 'On' : 'Off'}</p>
//       <button onClick={toggle}>Toggle</button>
//       <button onClick={() => setValue(true)}>Enable</button>
//       <button onClick={() => setValue(false)}>Disable</button>
//     </div>
//   );
// }
// Arguments
// defaultValue: boolean (optional): The initial value of the toggle state. If not provided, it should default to false
// Returns
// A tuple containing the following elements:

// value: boolean: The current state
// toggle: () => void: A function that toggles the state between true and false
// setValue: A function that sets the state to the provided value. It has the same signature as the second argument of the useState hook

import React from "react";

export const useToggle = () => {
  const [isToggled, setIsToggled] = React.useState(false);

  const toggle = () => {
    setIsToggled((prev) => !prev);
  };

  return [isToggled, toggle, setIsToggled];
};
