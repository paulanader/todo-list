import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  display: flex;
  justify-content: center;
  padding: 4rem;
`;
