import { createContext, useState, useEffect, ReactNode } from "react";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  status: any;
}

interface MainContextInterface {
  todos: TodoType[];
  getTodoById: (id: string | undefined) => TodoType | undefined;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  deleteTodo: (id: string) => void;
  editTodo: (
    id: string,
    text: string,
    description: string,
    status: string
  ) => void;
  addTodo: (title: string, description: string, status: string) => void;
  moveTodo: (old: number, new_: number) => void;
}

interface Props {
  children: ReactNode;
}

export const MainContext = createContext<MainContextInterface | null>(null);

export const MainProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<TodoType[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getTodoById = (id: string | undefined): TodoType | undefined => {
    return todos.find((todo: TodoType) => todo.id === id);
  };

  const addTodo = (title: string, description: string, status: string) => {
    const newTodo = {
      id: String(Math.random() * 5000),
      title,
      description,
      status,
    };
    const orderTodos = [newTodo, ...todos];
    setTodos(orderTodos);
  };

  const editTodo: (
    id: string,
    text: string,
    description: string,
    status: string
  ) => void = (
    id: string,
    text: string,
    description: string,
    status: string
  ) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = text;
          todo.description = description;
          todo.status = status;
        }

        return todo;
      })
    );
  };

  const deleteTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const moveTodo = (old: number, new_: number) => {
    const copy = JSON.parse(JSON.stringify(todos));
    const thing = JSON.parse(JSON.stringify(todos[old]));
    copy.splice(old, 1);
    copy.splice(new_, 0, thing);
    setTodos(copy);
  };

  const mainContextValue: MainContextInterface = {
    todos,
    getTodoById,
    setTodos,
    deleteTodo,
    editTodo,
    addTodo,
    moveTodo,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      {children}
    </MainContext.Provider>
  );
};
