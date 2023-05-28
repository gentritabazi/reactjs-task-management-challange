import { Link, useNavigate, useParams } from "react-router-dom";
import EditTaskComponent from "../../components/EditTask/EditTask";
import { Box } from "@mui/material";
import { MainContext } from "../../contexts/MainContext";
import { useContext } from "react";

const EditTask = () => {
  const { taskId } = useParams<{ taskId: string }>() ?? { taskId: "0" };
  const navigate = useNavigate();
  const { editTodo } = useContext(MainContext)!;

  const onEdit = (text: string, description: string, status: string) => {
    editTodo(String(taskId), text, description, status);
    navigate("/");
  };

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Link to="/">Back</Link>
      </div>

      <Box sx={{ mb: "20px" }} />

      <EditTaskComponent taskId={taskId} onEdit={onEdit} />
    </div>
  );
};

export default EditTask;
