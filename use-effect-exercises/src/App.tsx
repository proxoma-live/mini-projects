import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [render, setRender] = useState(false);

  useEffect(() => {
    console.log("component rerendered");
  });

  useEffect(() => {
    console.log("Hi");
    return () => {
      console.log("bye");
    };
  }, []);

  useEffect(() => {
    console.log("name or age changed");
  }, [name, age]);

  useEffect(() => {
    document.title = name;
    const timeout = setTimeout(() => {
      console.log("debounced name", name);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <>
      <button onClick={() => setRender(!render)}>rerender</button>
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>
        {age}
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>My name is {name}</div>
    </>
  );
}

export default App;
