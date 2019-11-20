import React, { useState } from "react";
import { Form } from "./styled";

interface IProps {
  addTask: (value: string) => void;
}

export default (props: IProps) => {
  const { addTask } = props;
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) {
      return;
    }

    addTask(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={(e: any) => setValue(e.target.value)}
      />
    </Form>
  );
};
