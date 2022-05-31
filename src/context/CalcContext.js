import { useState, createContext } from "react";

export const CalcContext = createContext();

export const CalcContextProvider = ({ children }) => {
  const [calcDisplay, setCalcDisplay] = useState("");
  const handleDigitClick = (e) =>
    setCalcDisplay(calcDisplay?.concat(e.target.value));

  const value = { calcDisplay, handleDigitClick };
  return <CalcContext.Provider value={value}>{children}</CalcContext.Provider>;
};
