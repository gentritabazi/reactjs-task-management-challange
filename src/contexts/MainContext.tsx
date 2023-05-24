import { createContext, useState, useEffect, ReactNode } from "react";

export interface TodoType {
  id: string;
  title: string;
  completed: any;
  starred: any;
}

interface MainContextInterface {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  markComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  addTodo: (title: string) => void;
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

  const addTodo = (title: string) => {
    if (title.trim()) {
      const newTodo = {
        id: String(Math.random() * 5000),
        title,
        completed: false,
        starred: false,
      };
      const orderTodos = [newTodo, ...todos];
      setTodos(orderTodos);
    }
  };

  const editTodo: (id: string, text: string) => void = (
    id: string,
    text: string
  ) => {
    if (!(text === null) && text.trim()) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) todo.title = text;
          return todo;
        })
      );
    }
  };

  const markComplete = (id: string) => {
    const orderTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(orderTodos);
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
    setTodos,
    markComplete,
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
