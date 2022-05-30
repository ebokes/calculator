import React from "react";
import styled from "styled-components";

const DigitStyle = styled.div`
  input {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    font-size: 25px;
    margin-right: 40px;
    /* border: none; */
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.button.digits.bg};
    color: ${({ theme }) => theme.color.button.digits.fg};
  }
`;

const Digit = ({ num }) => {
  return (
    <DigitStyle>
      <input type="button" value={num} />
    </DigitStyle>
  );
};

export default Digit;
