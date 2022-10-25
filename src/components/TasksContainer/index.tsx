import { EmptyList } from "../EmptList";
import { ITask } from "../Home";
import { Task } from "../Task";
import { Container } from "./styles";

interface TaskProps {
  tasks: ITask[];
  deleteTask: (arraytasks: Array<ITask>) => void
}



export function TaskContainer({ tasks, deleteTask }: TaskProps) {
  
  function numberOfCompleteTasks() {
    let number = tasks.filter((task) => task.done === true)
    console.log(number)
    return number.length
  }



  return (
    <Container>
      <header>
        <div>
          Tarefas criadas <span>{tasks.length}</span>
        </div>
        <div>
          Concluídas <span>{numberOfCompleteTasks()}</span>
        </div>
      </header>
      {tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.text} deleteTask={deleteTask} task={task} tasks={tasks}  />)
      ) : (
        <EmptyList />
      )}
    </Container>
  );
}
