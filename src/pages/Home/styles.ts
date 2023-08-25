import { styled } from "styled-components";

export const NewTaskContainer = styled.form`
  display: flex;
  margin-top: -2%;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  input {
    min-width: 300px;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    background-color: ${(props) => props.theme["blue-700"]};
    border: none;
    border-radius: 6px;
    padding: 1rem;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
