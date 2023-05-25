import { Link } from "react-router-dom";
import CreateTaskComponent from "../../components/CreateTask/CreateTask";
import { MainContext } from "../../contexts/MainContext";
import { useContext } from "react";
import { Box } from "@mui/material";

const CreateTask = () => {
  const { addTodo } = useContext(MainContext)!;

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Link to="/">Back</Link>
      </div>

      <Box sx={{ mb: "20px" }} />

      <CreateTaskComponent addTodo={addTodo} />
    </div>
  );
};

export default CreateTask;
