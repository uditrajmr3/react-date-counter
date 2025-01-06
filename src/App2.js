import { useState } from "react";
import "./App.css";

export default function App2() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function resetState() {
    setCount(0);
    setStep(1);
  }

  // Create a new date using totalDays instead of count * step
  const today = new Date();
  const futureDate = new Date(today.getTime() + count * 24 * 60 * 60 * 1000);
  const formattedDate = futureDate.toDateString();

  return (
    <div className="App">
      <Step step={step} setStep={setStep} />
      <Counter step={step} count={count} setCount={setCount} />
      <p>
        {count !== 0 && `${count} days from`} today{" "}
        {count >= 0 ? "is " : "was "}
        {formattedDate}
      </p>
      <button onClick={resetState}>Reset</button>
    </div>
  );
}

function Step({ step, setStep }) {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="1"
        max="20"
        value={step}
        className="slider"
        id="myRange"
        onInput={(event) => setStep(Number(event.target.value))}
      />
      <span>Step: {step}</span>
    </div>
  );
}

function Counter({ step, count, setCount }) {
  return (
    <div>
      <button
        onClick={() => setCount((currentCount) => currentCount - 1 * step)}
      >
        -
      </button>
      <input
        type="text"
        value={count}
        onInput={(event) => setCount(Number(event.target.value))}
      />
      <button
        onClick={() => setCount((currentCount) => currentCount + 1 * step)}
      >
        +
      </button>
    </div>
  );
}
