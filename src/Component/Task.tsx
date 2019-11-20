import React from "react";
import { Button, Task as StyledTask } from "./styled";

interface IProps {
  task: {
    done: boolean;
    name: string;
  };
  index: number;
  completeTask: (index: number) => void;
  removeTask: (index: number) => void;
}

const Task: React.FC<IProps> = (props) => {
  const {
    task: { done, name },
    index,
    completeTask,
    removeTask,
  } = props;
  return (
    <StyledTask done={done}>
      {name}

      {!done && (
        <>
          <Button
            color="red"
            onClick={() => removeTask(index)}
          >
            x
          </Button>
          <Button onClick={() => completeTask(index)}>Complete</Button>
        </>
      )}
    </StyledTask>
  );
};

export default Task;
