import React from "react";
import { Button } from "./buttonStyle";

const SpecialOperator = ({ value, name, fg, bg, onClick }) => {
  return (
    <Button bg={bg} fg={fg}>
      <input type="button" value={value} name={name} onClick={onClick} />
    </Button>
  );
};

export default SpecialOperator;
