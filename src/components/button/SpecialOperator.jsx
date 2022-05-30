import React from "react";
import styled from "styled-components";

const SpecialOperatorStyle = styled.div`
  input {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    font-size: 25px;
    margin-right: 40px;
    cursor: pointer;
    background-color: ${({ bg }) => bg || "#616161"};
    color: ${({ fg }) => fg || "#A5A5A5"};
  }
`;

const SpecialOperator = ({ value, name, bg, fg }) => {
  return (
    <SpecialOperatorStyle bg={bg} fg={fg}>
      <input type="button" value={value} name={name} />
    </SpecialOperatorStyle>
  );
};

export default SpecialOperator;
