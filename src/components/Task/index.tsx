import { CheckboxIndicator, CheckboxRoot, Container } from "./styles";
import { Check, Trash } from "phosphor-react";
import { styled } from "@stitches/react";
import { ITask } from "../Home";

const StyledTrash = styled(Trash, {
  color: "$gray-300",
  fontSize: "24px",
  cursor: "pointer",
});

interface TaskProps {
  task: ITask;
  tasks: ITask[];
  changeTaskArray: (arraytasks: Array<ITask>) => void;
}

export function Task({ task, tasks, changeTaskArray }: TaskProps) {
  function handleDeleteTask(currentTask: string) {
    const taskWithoutDeleteOne = tasks.filter(
      (task) => currentTask !== task.text
    );

    changeTaskArray([...taskWithoutDeleteOne]);
  }

  function handleCheckedTask(ischecked: boolean | string) {
    task.done = ischecked;
    changeTaskArray([...tasks]);
  }

  return (
    <Container>
      <div>
        <CheckboxRoot
          onCheckedChange={(ischecked) => handleCheckedTask(ischecked)}
        >
          <CheckboxIndicator>
            <Check weight="bold" viewBox="0 0 256 185" />
          </CheckboxIndicator>
        </CheckboxRoot>
      </div>
      <div>
        <p className={task.done === true ? "done" : ""} key={task.text}>
          {task.text}
        </p>
      </div>
      <StyledTrash onClick={() => handleDeleteTask(task.text)} />
    </Container>
  );
}
