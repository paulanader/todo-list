import { TaskType } from "../../@types/TaskType";
import {
  DoneTaskButton,
  OpenTaskButton,
  TaskCardContainer,
  TrashButton,
} from "./styles";

interface TasksCardProps {
  task: TaskType;
  handleClickingTheFinishTaskButton: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export const TasksCard = ({
  task,
  handleClickingTheFinishTaskButton,
  handleDeleteTask,
}: TasksCardProps) => {
  console.log({ task });
  return (
    <TaskCardContainer>
      <button
        type="button"
        onClick={() => handleClickingTheFinishTaskButton(task.id)}
      >
        {task.isDone ? <DoneTaskButton /> : <OpenTaskButton />}
      </button>

      <span>{task.description}</span>
      <button type="button" onClick={() => handleDeleteTask(task.id)}>
        <TrashButton fadeIn={!!handleDeleteTask} />
      </button>
    </TaskCardContainer>
  );
};
