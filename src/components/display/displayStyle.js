import styled from "styled-components";

export const DisplayWrapper = styled.div`
  height: 6rem;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0.5rem 0.5rem 0.6rem -0.2rem #ffffff1f;
  border-radius: 1rem;
  margin-bottom: 3rem;

  input {
    border-radius: 1rem;
    font-size: 3rem;
    padding: 0 1rem;
    background-color: #191a1f;
    color: #b4bbc5;
    border: none;
    border-radius: 1rem;
    height: 6rem;
    text-align: end;
    width: 100%;
    box-shadow: -0.6rem -0.6rem 0.5rem -0.1rem #06070b;

    &::placeholder {
      color: #fff;
    }
  }
`;
