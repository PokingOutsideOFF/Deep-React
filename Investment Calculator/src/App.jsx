import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const inputGroup = {
    "Initial Investment": "initialInvestment",
    "Annual Investment": "annualInvestment",
    "Expected Return": "expectedReturn",
    Duration: "duration",
  };
  const [input, setInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = input.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <UserInput
          inputHeadings={inputGroup}
          onChange={handleChange}
          userInput={input}
        />
        {!isInputValid && (
          <p className="center">Please enter duration greater than zero</p>
        )}
        {isInputValid && <Result userInput={input} />}
      </main>
    </>
  );
}

export default App;
