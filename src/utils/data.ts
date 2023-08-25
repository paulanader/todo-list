import { TaskType } from "../@types/TaskType";

export const sortTasksByMaxId = (tasks: TaskType[]): TaskType[] => {
  return tasks.slice().sort((a, b) => b.id - a.id);
};
