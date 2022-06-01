import React, { useContext } from "react";
import { Button } from "./buttonStyle";
import { CalcContext } from "../../context/CalcContext";

const ArithmeticOperator = ({ value, name }) => {
  const { handleArithmeticClick } = useContext(CalcContext);
  return (
    <Button>
      <input
        type="button"
        value={value}
        name={name}
        onClick={handleArithmeticClick}
      />
    </Button>
  );
};

export default ArithmeticOperator;
