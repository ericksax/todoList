import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { TaskContainer } from "../TasksContainer";
import { Container, Form } from "./styles";

export interface ITask {
  text: string;
  done: boolean | string;
}

export function Home() {
  const [task, setTask] = useState<ITask>({} as ITask);
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleInputTask(e: FormEvent<HTMLInputElement>) {
    const text = e.currentTarget.value;

    setTask({ ...task, text: text, done: false });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ ...task, text: "" });
  }

  function changeTaskArray(arraytasks: Array<ITask>) {
    setTasks(arraytasks);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskText"
          value={task.text}
          placeholder="Adicione uma nova tarefa"
          onChange={handleInputTask}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </Form>
      <TaskContainer tasks={tasks} changeTaskArray={changeTaskArray} />
    </Container>
  );
}
