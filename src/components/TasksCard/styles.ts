import { CheckCircle, Circle, Trash } from "phosphor-react";
import { styled } from "styled-components";

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

export const TrashButton = styled(Trash)`
  font-size: 1.25rem;
  color: ${(props) => props.theme["gray-400"]};
`;
