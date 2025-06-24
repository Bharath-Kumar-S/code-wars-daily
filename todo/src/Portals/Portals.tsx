import { createPortal } from "react-dom";

export const Portals = () => {
  return (
    <div>
      {createPortal(
        <div>
          <h1>Portals Example</h1>
          <p>This content is rendered in a different part of the DOM.</p>
        </div>,
        document.getElementById("portal") || document.body
      )}
    </div>
  );
};
