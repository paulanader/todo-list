import { TaskType } from "../../@types/TaskType";
import { TasksCard } from "../TasksCard";
import { HeaderTable, HeaderTableItem, TasksTableContainer } from "./styles";

interface TasksTableProps {
  tasks: TaskType[] | [];
  handleClickingTheFinishTaskButton: (id: number) => void;
}

export const TasksTable = ({
  tasks,
  handleClickingTheFinishTaskButton,
}: TasksTableProps) => {
  return (
    <TasksTableContainer>
      <HeaderTable>
        <HeaderTableItem item="created">
          <h2>Total de tarefas</h2>
          <span>0</span>
        </HeaderTableItem>
        <HeaderTableItem item="done">
          <h2>Concluídas</h2>
          <span>0 de 0</span>
        </HeaderTableItem>
      </HeaderTable>
      {Array.isArray(tasks) && tasks.length > 0 && (
        <>
          {tasks.map((task: TaskType) => (
            <TasksCard
              key={task.id}
              task={task}
              handleClickingTheFinishTaskButton={
                handleClickingTheFinishTaskButton
              }
            />
          ))}
        </>
      )}
    </TasksTableContainer>
  );
};
