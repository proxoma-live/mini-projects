import { useState } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState<string[]>(["A", "B", "C"]);
  const [input, setInput] = useState<string>("");

  function popArray() {
    setArray((currentArray) => currentArray.slice(0, -1));
  }

  function removeElement(letter: string) {
    setArray((currentArray) =>
      currentArray.filter((element) => element !== letter)
    ); 

  function addElement(letter: string) {
    setArray((currentArray) => [letter, ...currentArray]);
  }

  function addElementEnd(letter: string) {
    setArray((currentArray) => [...currentArray, letter]);
  }

  function clearArray() {
    setArray([]);
  }

  function resetArray() {
    setArray(["A", "B", "C"]);
  }

  function replaceAll(element: string, replace: string) {
    setArray((currentArray) =>
      currentArray.map((currentElement) =>
        currentElement === element ? replace : currentElement
      )
    );
  }

  function addInput() {
    setArray((currentArray) => {
      if (input === "") return currentArray;
      return [input, ...currentArray];
    });
  }

  function addAtIndex(letter: string, index: number) {
    setArray((currentArray) => [
      ...currentArray.slice(0, index),
      letter,
      ...currentArray.slice(index),
    ]);
  }

  return (
    <div className="wrapper">
      <div className="array-highliter">
        <div>Current Array: {array.join(",")}</div>
      </div>
      <button className="wrapper__item" onClick={popArray}>
        Pop the array
      </button>
      <button className="wrapper__item" onClick={() => removeElement("B")}>
        Remove specific letter from array
      </button>
      <button className="wrapper__item" onClick={() => addElement("B")}>
        Add new element to the start of an array
      </button>
      <button className="wrapper__item" onClick={() => addElementEnd("B")}>
        Add new element to the end of an array
      </button>
      <button className="wrapper__item" onClick={clearArray}>
        Clear array
      </button>
      <button className="wrapper__item " onClick={resetArray}>
        Reset array
      </button>
      <button className="wrapper__item" onClick={() => replaceAll("A", "H")}>
        Replace all 'A's with 'H's
      </button>
      <label className="wrapper__item" htmlFor="input">
        Add text to array
      </label>
      <input
        className="wrapper__item-input"
        type="text"
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="wrapper__item" onClick={addInput}>
        Submit
      </button>

      <button className="wrapper__item" onClick={() => addAtIndex("B", 2)}>
        Add 'B' at index 2
      </button>
    </div>
  );
}

export default App;
