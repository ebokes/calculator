import styled from "styled-components";

export const DisplayWrapper = styled.div`
  height: 60px;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 5px 5px 6px -2px #ffffff1f;
  border-radius: 10px;
  margin-bottom: 30px;

  input {
    border-radius: 10px;
    font-size: 30px;
    padding: 0 10px;
    background-color: #191a1f;
    color: #fff;
    border: none;
    border-radius: 10px;
    height: 60px;
    text-align: end;
    width: 100%;
    box-shadow: -6px -6px 5px -1px #06070b;

    &::placeholder {
      color: #fff;
    }
  }
`;
