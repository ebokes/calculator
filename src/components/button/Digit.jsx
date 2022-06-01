import React, { useContext } from "react";
import { Button } from "./buttonStyle";
import { CalcContext } from "../../context/CalcContext";

const Digit = ({ value }) => {
  const { handleDigitClick } = useContext(CalcContext);
  return (
    <Button>
      <input type="button" value={value} onClick={handleDigitClick} />
    </Button>
  );
};

export default Digit;
