import React, { useState } from "react";
import { evaluate } from "mathjs";

const ScientificCalculator = ({hideCalc}) => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  // Handle button clicks and update the expression
  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  // Evaluate the expression using Math.js
  const handleEvaluate = () => {
    try {
      const res = evaluate(expression);
      setResult(res);
    } catch (error) {
      setResult("Error");
    }
  };

  // Clear the expression and result
  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="relative flex flex-col items-center bg-gray-100 p-6 shadow-lg rounded-lg">
      <span onClick={hideCalc} className="absolute top-[.3rem] right-[1rem] cursor-pointer hover:bg-gray-300 rounded-full duration-500 w-[1rem] h-[1rem] flex items-center justify-center text-xl">&times;</span>
      <h1 className="text-2xl font-bold mb-4 text-purple-600">Scientific Calculator</h1>
      
      <div className="w-full mb-4">
        <input
          type="text"
          className="w-full text-right p-3 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none text-xl"
          value={expression}
          placeholder="0"
          readOnly
        />
        <p className="text-right mt-2 text-xl font-semibold">{result}</p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {/* Number and Operator Buttons */}
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "^"].map((btn) => (
          <button
            key={btn}
            className="p-2 bg-purple-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-purple-600 transition"
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}

        {/* Special Functions */}
        <button
          className="p-2 bg-blue-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-blue-600 transition"
          onClick={() => handleButtonClick("sqrt(")}
        >
          √
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-blue-600 transition"
          onClick={() => handleButtonClick("sin(")}
        >
          sin
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-blue-600 transition"
          onClick={() => handleButtonClick("cos(")}
        >
          cos
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-blue-600 transition"
          onClick={() => handleButtonClick("tan(")}
        >
          tan
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-blue-600 transition"
          onClick={() => handleButtonClick("(")}
        >
          &#40;
        </button>

        <button
          className="p-2 bg-blue-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-blue-600 transition"
          onClick={() => handleButtonClick(")")}
        >
          &#41;
        </button>

        {/* Clear and Equals */}
        <button
          className="col-span-2 p-2 bg-red-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-red-600 transition"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="col-span-2 p-2 w-full block bg-green-500 text-white rounded-lg shadow-lg text-xl font-semibold hover:bg-green-600 transition"
          onClick={handleEvaluate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
