import React, { useContext } from "react";
import { Button } from "./buttonStyle";
import { CalcContext } from "../../context/CalcContext";

const Digit = ({ value }) => {
  const { handleDigitClick } = useContext(CalcContext);
  return (
    <Button bg="#303136" fg="#29A8FF">
      <input type="button" value={value} onClick={handleDigitClick} />
    </Button>
  );
};

export default Digit;
