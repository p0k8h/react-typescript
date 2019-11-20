import React, { useEffect, useState } from "react";
import { ITodoItems } from "../interfaces";
import CreateTask from "./CreateTask";
import { Container, CreateTask as StyledCreateTask, Header } from "./styled";
import Task from "./Task";

function Todo() {
  const [tasks, setTasks] = useState<ITodoItems>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/todo")
      .then(resp => resp.json())
      .then(resp => {
        const t = resp.recordset;

        const final = [...tasks, ...t];

        setTasks(final);
      })
      .catch(err => {
        console.log("error fetching api", err);
      });
  }, []);

  const addTask = (name: string) => {
    const newTask = [...tasks, { name, done: false }];
    setTasks(newTask);
    // send a post request to api
  };

  const completeTask = (index: number) => {
    const newTask = [...tasks];
    newTask[index].done = true;
    setTasks(newTask);

    // send a put request to api
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);

    // send a delete request to api
  };

  return (
    <>
      <Container>
        <Header>TODO - ITEMS</Header>
        <div>
          {tasks.map((task, index) => (
            <Task
              task={task}
              index={index}
              key={index}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          ))}
        </div>
        <StyledCreateTask>
          <CreateTask addTask={addTask} />
        </StyledCreateTask>
      </Container>
    </>
  );
}

export default Todo;
