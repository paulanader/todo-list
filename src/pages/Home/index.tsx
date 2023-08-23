import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { TasksTable } from "../../components/TasksTable";
import { api } from "../../lib/axios";
import { TaskType } from "../../@types/TaskType";

export const Home = () => {
  const [tasks, setTasks] = useState<TaskType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getTasks(query?: string) {
    try {
      setIsLoading(true);
      const response = await api.get("/tasks", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          q: query,
        },
      });

      setTasks(response.data);
    } catch {
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  async function editTask(data: TaskType | undefined, id: number) {
    try {
      setIsLoading(true);
      const response = await api.put(`/tasks/${id}`, {
        description: data?.description,
        isDone: !data?.isDone,
      });

      getTasks();

      return response.data;
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  const handleClickingTheFinishTaskButton = (id: number) => {
    console.log({ id });
    const currentTask = tasks.find((task) => task.id === id);

    editTask(currentTask, id);
  };

  return (
    <>
      <Header />
      <NewTask />

      <TasksTable
        tasks={tasks}
        handleClickingTheFinishTaskButton={handleClickingTheFinishTaskButton}
      />
    </>
  );
};
