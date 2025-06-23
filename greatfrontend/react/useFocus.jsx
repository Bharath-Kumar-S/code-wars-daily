// https://www.greatfrontend.com/questions/javascript/use-focus

// Implement a useFocus hook that enables programmatic focusing of an element.

// export default function Component() {
//   const [ref, focus] = useFocus();

//   return (
//     <div>
//       <input ref={ref} type="text" />
//       <button onClick={focus}>Focus input</button>
//     </div>
//   );
// }

import { useCallback, useRef } from "react";

export const useFocus = () => {
  const ref = useRef(null);

  const focus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const blur = useCallback(() => {
    if (ref.current) {
      ref.current.blur();
    }
  }, []);

  return [ref, focus, blur];
};
