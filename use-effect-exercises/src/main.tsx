import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { useState } from "react";
import "./index.css";

export function Root() {
  const [mount, setMount] = useState(false);

  const root = mount ? <App /> : null;

  return (
    <>
      <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      {root}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
