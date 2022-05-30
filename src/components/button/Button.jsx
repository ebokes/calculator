import React from "react";
import ArithmeticOperator from "./ArithmeticOperator";
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
        <ArithmeticOperator value="/" name="/" />
      </ButtonRow>
      <ButtonRow>
        <Digit value="7" />
        <Digit value="8" />
        <Digit value="9" />
        <ArithmeticOperator value="x" name="*" />
      </ButtonRow>
      <ButtonRow>
        <Digit value="4" />
        <Digit value="5" />
        <Digit value="6" />
        <ArithmeticOperator value="-" name="-" />
      </ButtonRow>
      <ButtonRow>
        <Digit value="1" />
        <Digit value="2" />
        <Digit value="3" />
        <ArithmeticOperator value="+" name="+" />
      </ButtonRow>
      <ButtonRow>
        <Digit value="0" />
        <Digit value="." />
        <SpecialOperator value="←" />
        <SpecialOperator value="=" name="=" bg="#005DB2" fg="#B2DAFF" />
      </ButtonRow>
    </ButtonWrapper>
  );
};

export default Button;
