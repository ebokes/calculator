import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;
export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const Button = styled.div`
  input {
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    font-size: 2.5rem;
    cursor: pointer;
    border: none;
    background-color: ${({ bg }) => bg || "#191a1f"};
    color: ${({ fg }) => fg || "#586063"};
    box-shadow: 0.6rem 0.8rem 0.3rem 0.1rem #06070b;
    position: relative;
    transition: 0.2s;

    &:active {
      box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem #06070b;
      transform: translate(-0.1rem, -0.1rem);
    }
  }

  box-shadow: -0.6rem -0.6rem 0.5rem -0.1rem #ffffff1f;
  border-radius: 1rem;
`;
