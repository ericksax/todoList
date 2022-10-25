import { EmptyList } from "../EmptList";
import { ITask } from "../Home";
import { Task } from "../Task";
import { Container } from "./styles";

interface TaskProps {
  tasks: ITask[];
  changeTaskArray: (arraytasks: Array<ITask>) => void;
}

export function TaskContainer({ tasks, changeTaskArray }: TaskProps) {
  const number = tasks.filter((task) => task.done === true).length;

  return (
    <Container>
      <header>
        <div>
          Tarefas criadas <span>{tasks.length}</span>
        </div>
        <div>
          Concluídas{" "}
          <span>
            {number} de {tasks.length}
          </span>
        </div>
      </header>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.text}
            changeTaskArray={changeTaskArray}
            task={task}
            tasks={tasks}
          />
        ))
      ) : (
        <EmptyList />
      )}
    </Container>
  );
}
