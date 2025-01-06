import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Create a new date using totalDays instead of count * step
  const today = new Date();
  const futureDate = new Date(today.getTime() + count * 24 * 60 * 60 * 1000);
  const formattedDate = futureDate.toDateString();

  return (
    <div className="App">
      <Step step={step} setStep={setStep} />
      <Counter step={step} count={count} setCount={setCount} />
      <p>
        {count !== 0 && `${count} days from`} today {count >= 0 ? "is" : "was"}{" "}
        {formattedDate}
      </p>
    </div>
  );
}

function Step({ step, setStep }) {
  return (
    <div>
      <button onClick={() => setStep((currentStep) => currentStep - 1)}>
        -
      </button>
      <p>Step: {step}</p>
      <button onClick={() => setStep((currentStep) => currentStep + 1)}>
        +
      </button>
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
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((currentCount) => currentCount + 1 * step)}
      >
        +
      </button>
    </div>
  );
}
