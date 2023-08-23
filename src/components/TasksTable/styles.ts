import { styled } from "styled-components";

export const TasksTableContainer = styled.div`
  max-width: 1120px;
  margin: 4rem auto 0;
`;

export const HeaderTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

interface HeaderTableItemProps {
  item: "created" | "done";
}

export const HeaderTableItem = styled.div<HeaderTableItemProps>`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  h2 {
    font-size: 0.875rem;
    font-weight: bold;

    color: ${(props) =>
      props.item === "created"
        ? props.theme["blue-700"]
        : props.theme["purple-700"]};
  }

  span {
    font-size: 0.875rem;
    font-weight: bold;
    color: white;
    background-color: ${(props) => props.theme["gray-600"]};
    padding: 0.3rem 0.5rem;
    border-radius: 50px;
  }
`;
