import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { TasksTable } from "../../components/TasksTable";
import { api } from "../../lib/axios";
import { TaskType } from "../../@types/TaskType";
import { NewTaskContainer } from "./styles";
import { useForm } from "react-hook-form";
import { PlusCircle } from "phosphor-react";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { sortTasksByMaxId } from "../../utils/data";

const newTask = z.object({
  description: z.string(),
});

type DescriptionProps = z.infer<typeof newTask>;

export const Home = () => {
  const [tasks, setTasks] = useState<TaskType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log({ isLoading });
  const { register, handleSubmit } = useForm<DescriptionProps>({
    resolver: zodResolver(newTask),
  });

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

  async function createNewTask(data: DescriptionProps) {
    try {
      setIsLoading(true);

      console.log({ data });
      const response = await api.post("/tasks", {
        description: data.description,
        isDone: false,
      });

      setTasks((state) => [response.data, ...state]);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteTask(id: number) {
    try {
      setIsLoading(true);
      const response = await api.delete(`/tasks/${id}`);

      getTasks();

      return response.data;
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  }

  const handleClickingTheFinishTaskButton = (id: number) => {
    const currentTask = tasks.find((task) => task.id === id);

    editTask(currentTask, id);
  };

  const handleCreateNewTask = (data: DescriptionProps) => {
    createNewTask(data);
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  return (
    <>
      <Header />

      <NewTaskContainer onSubmit={handleSubmit(handleCreateNewTask)}>
        <input
          placeholder="Adicionar uma nova tarefa"
          {...register("description")}
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </NewTaskContainer>

      <TasksTable
        tasks={sortTasksByMaxId(tasks)}
        handleClickingTheFinishTaskButton={handleClickingTheFinishTaskButton}
        handleDeleteTask={handleDeleteTask}
        isLoading={isLoading}
      />
    </>
  );
};
