import { CheckCircle, Circle, Trash } from "phosphor-react";

import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const TaskCardContainer = styled.div`
  background-color: ${(props) => props.theme["gray-600"]};
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  button {
    background-color: transparent !important;
    border: none;
    cursor: pointer;
  }

  span {
    color: white;
  }
`;

export const OpenTaskButton = styled(Circle)`
  font-size: 1.25rem;
  color: ${(props) => props.theme["blue-700"]};
`;
export const DoneTaskButton = styled(CheckCircle)`
  font-size: 1.25rem;
  background-color: ${(props) => props.theme["purple-700"]};
  color: white;
  border-radius: 1000px;
  border: transparent;
`;

interface FadeProps {
  fadeIn: boolean;
}

export const TrashButton = styled(Trash)<FadeProps>`
  font-size: 1.25rem;
  color: ${(props) => props.theme["gray-400"]};

  animation: ${(props) => (props.fadeIn ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;
