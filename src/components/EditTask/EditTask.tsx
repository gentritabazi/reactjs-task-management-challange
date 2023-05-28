import { useState, FC, ChangeEvent, useEffect, useContext } from "react";
import {
  FormControl,
  Button,
  TextField,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
  TextareaAutosize,
} from "@mui/material";
import { MainContext } from "../../contexts/MainContext";

interface Props {
  taskId: string | undefined;
  onEdit: (title: string, description: string, status: string) => void;
}

const EditTask: FC<Props> = ({ taskId, onEdit }) => {
  const { getTodoById } = useContext(MainContext)!;
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const task = getTodoById(taskId);

    setText(String(task?.title));
    setDescription(String(task?.description));
    setStatus(String(task?.status));
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setText(e.target.value);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onEdit(text, description, status);
  };

  const onChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value as string);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <FormControl fullWidth={true}>
          <TextField
            label="Title"
            variant="standard"
            onChange={handleChange}
            required={true}
            value={text}
          />

          <Box sx={{ mb: "20px" }} />

          <label>Description</label>
          <TextareaAutosize
            placeholder="Description"
            value={description}
            onChange={onChangeDescription}
          />

          <Box sx={{ mb: "20px" }} />

          <Select value={status} onChange={onChangeStatus}>
            <MenuItem value="toDo">To Do</MenuItem>
            <MenuItem value="inProgress">In Progress</MenuItem>
            <MenuItem value="inQA">In QA</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>

          <Box sx={{ mb: "20px" }} />

          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 5 }}
            type="submit"
          >
            Edit
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default EditTask;
