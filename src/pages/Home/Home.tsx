import { Typography, Box } from "@mui/material";
import TasksList from "../../components/TasksList/TasksList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Link to="create-task">Create Task</Link>
      </div>

      <Box sx={{ mb: "20px" }} />

      <Typography variant="h5" gutterBottom>
        Tasks List
      </Typography>

      <Box sx={{ mb: "20px" }} />

      <TasksList />
    </div>
  );
};

export default Home;
