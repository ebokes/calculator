import React from "react";
import { Button } from "./buttonStyle";

const SpecialOperator = ({ value, name, fg, bg }) => {
  return (
    <Button bg={bg} fg={fg}>
      <input type="button" value={value} name={name} />
    </Button>
  );
};

export default SpecialOperator;
