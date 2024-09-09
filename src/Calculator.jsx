import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleEvaluation = () => {
    if (input === "0/0") {
      setOutput("NaN");
    } else if (input === "") {
      setOutput("Error");
    } else if (input.includes("/0")) {
      setOutput("Infinity");
    } else {
      setOutput(eval(input));
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <input type="text" value={input} /> <br />
      {output !== "" && <div className="output">{output}</div>}
      <button className="btn" onClick={() => setInput(input + "7")}>
        7
      </button>
      <button className="btn" onClick={() => setInput(input + "8")}>
        8
      </button>
      <button className="btn" onClick={() => setInput(input + "9")}>
        9
      </button>
      <button className="btn" onClick={() => setInput(input + "+")}>
        +
      </button>{" "}
      <br />
      <button className="btn" onClick={() => setInput(input + "4")}>
        4
      </button>
      <button className="btn" onClick={() => setInput(input + "5")}>
        5
      </button>
      <button className="btn" onClick={() => setInput(input + "6")}>
        6
      </button>
      <button className="btn" onClick={() => setInput(input + "-")}>
        -
      </button>{" "}
      <br />
      <button className="btn" onClick={() => setInput(input + "1")}>
        1
      </button>
      <button className="btn" onClick={() => setInput(input + "2")}>
        2
      </button>
      <button className="btn" onClick={() => setInput(input + "3")}>
        3
      </button>
      <button className="btn" onClick={() => setInput(input + "*")}>
        *
      </button>{" "}
      <br />
      <button className="btn" onClick={handleClear}>
        C
      </button>
      <button className="btn" onClick={() => setInput(input + "0")}>
        0
      </button>
      <button className="btn" onClick={handleEvaluation}>
        =
      </button>
      <button className="btn" onClick={() => setInput(input + "/")}>
        /
      </button>
    </div>
  );
};

export default Calculator;
