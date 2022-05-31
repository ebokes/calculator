import React, { useContext } from "react";
import ArithmeticOperator from "./ArithmeticOperator";
import { ButtonRow, ButtonWrapper } from "./buttonStyle";
import Digit from "./Digit";
import SpecialOperator from "./SpecialOperator";
import { CalcContext } from "../../context/CalcContext";

const Button = () => {
  const { clear, backspace, handleSquareClick, handlePercentClick, calc } =
    useContext(CalcContext);
  return (
    <ButtonWrapper>
      <ButtonRow>
        <SpecialOperator value="AC" onClick={clear} />
        <SpecialOperator
          value="sq"
          bg="#005DB2"
          fg="#B2DAFF"
          onClick={handleSquareClick}
        />
        <SpecialOperator
          value="%"
          bg="#005DB2"
          fg="#B2DAFF"
          onClick={handlePercentClick}
        />
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
        <SpecialOperator value="←" onClick={backspace} />
        <SpecialOperator value="=" bg="#005DB2" fg="#B2DAFF" onClick={calc} />
      </ButtonRow>
    </ButtonWrapper>
  );
};

export default Button;
