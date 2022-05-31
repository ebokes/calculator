import { useState, createContext } from "react";

export const CalcContext = createContext();

export const CalcContextProvider = ({ children }) => {
  // Display
  const [calcDisplay, setCalcDisplay] = useState("");

  // Special Operator Buttons
  const clear = () => setCalcDisplay("");
  const backspace = () => setCalcDisplay(calcDisplay?.slice(0, -1).toString());

  // Digit Buttons
  const handleDigitClick = (e) =>
    setCalcDisplay(calcDisplay?.concat(e.target.value));

  // Arithmetic Operator Buttons
  const handleArithmeticClick = (e) =>
    setCalcDisplay(calcDisplay?.concat(e.target.name));

  // square button
  const handleSquareClick = () => setCalcDisplay((calcDisplay ** 2).toString());
  // percent button
  const handlePercentClick = () =>
    setCalcDisplay((calcDisplay / 100).toString());

  const value = {
    calcDisplay,
    clear,
    backspace,
    handleDigitClick,
    handleSquareClick,
    handlePercentClick,
    handleArithmeticClick,
  };
  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
};
