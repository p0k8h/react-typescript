import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ITodoItems } from "../interfaces";
import CreateTaskForm from "./CreateTaskForm";
import { Container, CreateTask, Header, MessageBar } from "./styled";
import Task from "./Task";

const API_BASE_URI: string = "http://localhost:3001/api/todo";

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<ITodoItems>([]);

  useEffect(() => {
    fetch(API_BASE_URI)
      .then(resp => resp.json())
      .then(resp => {
        const savedTask = [...tasks, ...resp.recordset];
        setTasks(savedTask);
        toast.success(`data fetched!!`);
      })
      .catch((err: Error) => {
        console.log("error fetching api", err);
      });
  }, []);

  const addTask = async (name: string) => {
    const newTask = [...tasks, { name, done: false }];
    setTasks(newTask);
    // send a post request to api

    try {
      const response = await fetch(API_BASE_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          done: false
        })
      });
      if (response) toast.success("Task added successfully");
    } catch (error) {
      toast.error(error);
    }
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
        <Header>TODO - List</Header>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        ))}
        <CreateTask>
          <CreateTaskForm addTask={addTask} />
        </CreateTask>
      </Container>
    </>
  );
};

export default Todo;
