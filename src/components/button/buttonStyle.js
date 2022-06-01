import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 20px;
`;
export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Button = styled.div`
  input {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    font-size: 25px;
    cursor: pointer;
    border: none;
    background-color: ${({ bg }) => bg || "#191a1f"};
    color: ${({ fg }) => fg || "#586063"};
    box-shadow: -6px -6px 5px -1px #ffffff1f;
  }

  box-shadow: 6px 8px 3px 1px #06070b;
  border-radius: 10px;
`;
