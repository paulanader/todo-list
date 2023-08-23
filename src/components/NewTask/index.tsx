import { PlusCircle } from "phosphor-react";
import { NewTaskContainer } from "./styles";

export const NewTask = () => {
  return (
    <NewTaskContainer>
      <input placeholder="Adicionar uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={20} />
      </button>
    </NewTaskContainer>
  );
};
