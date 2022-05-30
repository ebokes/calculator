import React from "react";
import { ButtonRow, ButtonWrapper } from "./buttonStyle";
import Digit from "./Digit";

const Button = () => {
  return (
    <ButtonWrapper>
      <ButtonRow>
        <Digit num={7} />
        <Digit num={8} />
        <Digit num={9} />
        {/* <Digit num={"/"} /> */}
      </ButtonRow>
      <ButtonRow>
        <Digit num={4} />
        <Digit num={5} />
        <Digit num={6} />
        {/* <Digit num={"X"} /> */}
      </ButtonRow>
      <ButtonRow>
        <Digit num={1} />
        <Digit num={2} />
        <Digit num={3} />
        {/* <Digit num={"-"} /> */}
      </ButtonRow>
      <ButtonRow>
        <Digit num={0} />
        <Digit num={"."} />
        {/* <Digit num={"⇦"} /> */}
        {/* <Digit num={"="} /> */}
      </ButtonRow>
    </ButtonWrapper>
  );
};

export default Button;
