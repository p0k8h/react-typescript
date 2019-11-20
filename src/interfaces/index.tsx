export interface ITodo {
  name: string;
  done: boolean;
}

export interface ITodoItems extends Array<ITodo> {}
