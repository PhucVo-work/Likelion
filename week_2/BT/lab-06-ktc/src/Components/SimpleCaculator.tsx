import React, { useState } from "react";

type ButtonValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "."
  | "AC"
  | "⁺∕₋"
  | "%"
  | "÷"
  | "×"
  | "-"
  | "+"
  | "=";
type Operator = "+" | "-" | "×" | "÷" | "%";

function SimpleCaculator() {
  const [display, setDisplay] = useState<string>("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);

  const handleButtonClick = (value: ButtonValue) => {
    if (/\d/.test(value)) {
      // Handle number input
      setDisplay(display === "0" ? value : display + value);
    } else if (value === ".") {
      // Handle decimal point
      if (!display.includes(".")) {
        setDisplay(display + ".");
      }
    } else if (value === "AC") {
      // Reset calculator
      setDisplay("0");
      setFirstOperand(null);
      setOperator(null);
    } else if (value === "⁺∕₋") {
      // Toggle sign
      const num = parseFloat(display);
      if (!isNaN(num)) {
        setDisplay((num * -1).toString());
      }
    } else if (["÷", "×", "-", "+", "%"].includes(value)) {
      // Handle operators
      const currentValue = parseFloat(display);
      if (!isNaN(currentValue)) {
        setFirstOperand(currentValue);
        setOperator(value as Operator);
        setDisplay("0");
      }
    } else if (value === "=") {
      // Calculate result
      if (firstOperand !== null && operator) {
        const secondOperand = parseFloat(display);
        if (!isNaN(secondOperand)) {
          const result = calculate(firstOperand, secondOperand, operator);
          setDisplay(result.toString());
          setFirstOperand(null);
          setOperator(null);
        }
      }
    }
  };

  const calculate = (
    first: number,
    second: number,
    op: Operator
  ): number | "Error" => {
    switch (op) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "×":
        return first * second;
      case "÷":
        return second !== 0 ? first / second : "Error";
      case "%":
        return second !== 0 ? first % second : "Error";
      default:
        return second;
    }
  };

  return (
    <div className="max-w-[45%] bg-[#434046] rounded-xl overflow-hidden border-1">
      <div className="h-[100px] flex justify-end items-end p-2.5">
        <p className="text-5xl text-white">{display}</p>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="w-[88px] h-[80px] bg-[#555358] border-black border-1">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("AC")}
              >
                AC
              </button>
            </div>
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("⁺∕₋")}
              >
                ⁺∕₋
              </button>
            </div>
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("%")}
              >
                %
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("7")}
              >
                7
              </button>
            </div>
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("8")}
              >
                8
              </button>
            </div>
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("9")}
              >
                9
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("4")}
              >
                4
              </button>
            </div>
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("5")}
              >
                5
              </button>
            </div>
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("6")}
              >
                6
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("1")}
              >
                1
              </button>
            </div>
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("2")}
              >
                2
              </button>
            </div>
            <div className="w-[88px] h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("3")}
              >
                3
              </button>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-2 h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick("0")}
              >
                0
              </button>
            </div>
            <div className="flex-1 h-[80px] bg-[#555358] border-1 border-black">
              <button
                className="flex items-center justify-center w-full h-full text-2xl text-white"
                onClick={() => handleButtonClick(".")}
              >
                .
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-[80px] h-[80px] bg-[#ff950c] border-1 border-black">
            <button
              className="flex items-center justify-center w-full h-full text-3xl text-white"
              onClick={() => handleButtonClick("÷")}
            >
              ÷
            </button>
          </div>
          <div className="w-[80px] h-[80px] bg-[#ff950c] border-1 border-black">
            <button
              className="flex items-center justify-center w-full h-full text-3xl text-white"
              onClick={() => handleButtonClick("×")}
            >
              ×
            </button>
          </div>
          <div className="w-[80px] h-[80px] bg-[#ff950c] border-1 border-black">
            <button
              className="flex items-center justify-center w-full h-full text-3xl text-white"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
          </div>
          <div className="w-[80px] h-[80px] bg-[#ff950c] border-1 border-black">
            <button
              className="flex items-center justify-center w-full h-full text-3xl text-white"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
          </div>
          <div className="w-[80px] h-[80px] bg-[#ff950c] border-1 border-black">
            <button
              className="flex items-center justify-center w-full h-full text-3xl text-white"
              onClick={() => handleButtonClick("=")}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCaculator;
