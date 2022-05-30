import React from "react";
import styled from "styled-components";

const ArithmeticOperatorStyle = styled.div`
  input {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    font-size: 25px;
    margin-right: 40px;
    /* border: none; */
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.button.arithmetic.bg};
    color: ${({ theme }) => theme.color.button.arithmetic.fg};
  }
`;

const ArithmeticOperator = ({ value, name }) => {
  return (
    <ArithmeticOperatorStyle>
      <input type="button" value={value} name={name} />
    </ArithmeticOperatorStyle>
  );
};

export default ArithmeticOperator;
