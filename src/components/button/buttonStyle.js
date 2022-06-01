import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 20px;
`;
export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Button = styled.div`
  input {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    font-size: 25px;
    cursor: pointer;
    border: none;
    background-color: ${({ bg }) => bg || "#616161"};
    color: ${({ fg }) => fg || "#A5A5A5"};
  }
`;
