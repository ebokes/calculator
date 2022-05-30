import React from "react";
import { Button } from "./buttonStyle";

const Digit = ({ value }) => {
  return (
    <Button bg="#303136" fg="#29A8FF">
      <input type="button" value={value} />
    </Button>
  );
};

export default Digit;
