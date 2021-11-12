import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal: React.FC = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    const root = document.getElementById("root");
    root.appendChild(container);

    return () => {
      root.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
