// https://www.greatfrontend.com/questions/javascript/use-state-with-reset

// Implement a useStateWithReset hook that's similar to useState but with an additional reset function that resets the state to its initial value.

// export default function Component() {
//   const [value, setValue, resetValue] = useStateWithReset(10);

//   return (
//     <div>
//       <div>Value: {value}</div>
//       <input onChange={(e) => setValue(e.target.value)} />
//       <button onClick={resetValue}>reset</button>
//     </div>
//   );
// }
// Arguments
// initialValue: the initial value of the state. This argument should be the same as the first argument of the useState hook
// Returns
// The useStateWithReset hook should have the same return values as the useState hook, plus an additional function that resets the state to initialValue

import React from "react";

export const useStateWithReset = (initial) => {
  const initialState = React.useMemo(() => {
    return typeof initial === "function" && initial.length === 0
      ? initial()
      : initial;
  }, []);

  const [state, setState] = React.useState(initialState);

  const reset = React.useCallback(() => {
    setState(initialState);
  }, [initialState]);

  return [state, setState, reset];
};
