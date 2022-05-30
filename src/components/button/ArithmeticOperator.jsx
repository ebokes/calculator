import React from "react";
import { Button } from "./buttonStyle";

const ArithmeticOperator = ({ value, name }) => {
  return (
    <Button bg="#005DB2" fg="#B2DAFF">
      <input type="button" value={value} name={name} />
    </Button>
  );
};

export default ArithmeticOperator;
