import CreateTaskComponent from "../../components/CreateTask/CreateTask";
import { MainContext } from "../../contexts/MainContext";
import { useContext } from "react";

const CreateTask = () => {
  const { addTodo } = useContext(MainContext)!;

  return <CreateTaskComponent addTodo={addTodo} />;
};

export default CreateTask;
