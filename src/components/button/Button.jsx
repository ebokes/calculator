import React from "react";
import { ButtonRow, ButtonWrapper } from "./buttonStyle";
import Digit from "./Digit";
import SpecialOperator from "./SpecialOperator";

const Button = () => {
  return (
    <ButtonWrapper>
      <ButtonRow>
        <SpecialOperator value="AC" />
        <SpecialOperator value="sq" bg="#005DB2" fg="#B2DAFF" />
        <SpecialOperator value="%" bg="#005DB2" fg="#B2DAFF" />
        {/* <Digit num={"/"} /> */}
      </ButtonRow>
      <ButtonRow>
        <Digit num="7" />
        <Digit num="8" />
        <Digit num="9" />
        {/* <Digit num={"X"} /> */}
      </ButtonRow>
      <ButtonRow>
        <Digit num="4" />
        <Digit num="5" />
        <Digit num="6" />
        {/* <Digit num="-"} /> */}
      </ButtonRow>
      <ButtonRow>
        <Digit num="1" />
        <Digit num="2" />
        <Digit num="3" />
        {/* <Digit num="+"} /> */}
      </ButtonRow>
      <ButtonRow>
        <Digit num="0" />
        <Digit num="." />
        <SpecialOperator value="←" />
        <SpecialOperator value="=" name="=" bg="#005DB2" fg="#B2DAFF" />
      </ButtonRow>
    </ButtonWrapper>
  );
};

export default Button;
