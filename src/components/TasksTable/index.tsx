import { useMemo } from "react";
import { TaskType } from "../../@types/TaskType";
import { TasksCard } from "../TasksCard";
import {
  HeaderTable,
  HeaderTableItem,
  TableContainer,
  TasksTableContainer,
} from "./styles";
import { Loading } from "../Loading";

interface TasksTableProps {
  tasks: TaskType[] | [];
  handleClickingTheFinishTaskButton: (id: number) => void;
  handleDeleteTask: (id: number) => void;
  isLoading: boolean;
}

export const TasksTable = ({
  tasks,
  isLoading,
  handleClickingTheFinishTaskButton,
  handleDeleteTask,
}: TasksTableProps) => {
  const doneTasksCount = useMemo(() => {
    if (tasks) {
      const completedTasks = tasks.filter((task) => task.isDone);
      return completedTasks.length;
    } else {
      return 0;
    }
  }, [tasks]);

  return (
    <TasksTableContainer>
      <HeaderTable>
        <HeaderTableItem item="created">
          <h2>Total de tarefas</h2>
          <span>{tasks.length}</span>
        </HeaderTableItem>
        <HeaderTableItem item="done">
          <h2>Concluídas</h2>
          <span>
            {doneTasksCount} de {tasks.length}
          </span>
        </HeaderTableItem>
      </HeaderTable>
      {isLoading && <Loading />}
      <TableContainer>
        {!isLoading && Array.isArray(tasks) && tasks.length > 0 && (
          <>
            {tasks.map((task: TaskType) => (
              <TasksCard
                key={task.id}
                task={task}
                handleClickingTheFinishTaskButton={
                  handleClickingTheFinishTaskButton
                }
                handleDeleteTask={handleDeleteTask}
              />
            ))}
          </>
        )}
      </TableContainer>
    </TasksTableContainer>
  );
};
