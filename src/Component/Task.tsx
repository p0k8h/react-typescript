import React from "react";
import { Task as StyledTask } from "./styled";

interface IProps {
  task: {
    done: boolean;
    name: string;
  };
  index: number;
  completeTask: (index: number) => void;
  removeTask: (index: number) => void;
}

const Task = (props: IProps) => {
  const {
    task: { done, name },
    index,
    completeTask,
    removeTask
  } = props;
  return (
    <StyledTask done={done}>
      {name}

      {!done && (
        <>
          <button
            style={{ background: "red" }}
            onClick={() => removeTask(index)}
          >
            x
          </button>
          <button onClick={() => completeTask(index)}>Complete</button>
        </>
      )}
    </StyledTask>
  );
};

export default Task;
