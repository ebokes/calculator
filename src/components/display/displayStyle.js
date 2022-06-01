import styled from "styled-components";

export const DisplayWrapper = styled.div`
  height: 60px;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  input {
    border-radius: 10px;
    font-size: 30px;
    padding: 0 10px;
    background-color: #303030;
    color: #fff;
    border-radius: 5px;
    height: 60px;
    text-align: end;
    width: 100%;

    &::placeholder {
      color: #fff;
    }
  }
`;
