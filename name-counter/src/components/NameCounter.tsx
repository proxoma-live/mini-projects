import { useState } from "react";

const NameCounter = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={() => setAge((age) => age - 1)}>-</button>
        <span>{age}</span>
        <button onClick={() => setAge((age) => age + 1)}>+</button>
      </div>
      <p className="output">
        My name is {name} and I'm {age} years old
      </p>
    </div>
  );
};

export default NameCounter;
