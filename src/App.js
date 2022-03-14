import { useState } from "react";
import Classes from "./App.module.css";
import { ButtonData } from "./CalculatorButtonData";

function App() {
  const [Result, setResult] = useState([]);
  const onButtonClickHandler = (event) => {
    if (
      event.target.name !== "C" &&
      event.target.name !== "<<" &&
      event.target.name !== "="
    ) {
      setResult(Result + event.target.name);
    } else {
      if (event.target.name === "C") {
        setResult("");
      } else if (event.target.name === "=") {
        setResult(eval(Result));
      } else if (event.target.name === "<<") {
        setResult(Result.slice(0, -1));
      } else if (event.target.name === "%") {
      }
    }
  };
  return (
    <div className={Classes.box}>
      <div className={Classes.calculatorBody}>
        <div className={Classes.displayBox}>
          <div className={Classes.resultBox}>
            <p className={Classes.displayText}>{Result}</p>
          </div>
        </div>
        <div className={Classes.buttonBox}>
          {ButtonData.map((data) => (
            <button
              key={data.id}
              name={data.name}
              className={data.className}
              onClick={onButtonClickHandler}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
