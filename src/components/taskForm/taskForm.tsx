import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ETaskType } from "../../types/task";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addTask } from "../../redux/taskSlice";
import { TTaskFormProps } from "./types";

const TaskForm = ({ setFilter }: TTaskFormProps): JSX.Element => {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleOnClick = () => {
    dispatch(addTask(description, title));
    setDescription("");
    setTitle("");
  };

  return (
    <>
      <Box width="100%" sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">FilterTask</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="filter"
            onChange={(e) =>
              setFilter(
                e.target.value === "COMPLETED"
                  ? ETaskType.COMPLETED
                  : e.target.value === "NOT_COMPLETED"
                  ? ETaskType.NOT_COMPLETED
                  : ETaskType.ALL
              )
            }
          >
            <MenuItem value="ALL">ALL</MenuItem>
            <MenuItem value="COMPLETED">completed</MenuItem>
            <MenuItem value="NOT_COMPLETED">notCompleted</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box width="100%" gap="10px" display="flex">
        <TextField
          fullWidth
          label={"title"}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          variant="outlined"
          size="small"
        />
        <TextField
          fullWidth
          label={"description"}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          variant="outlined"
          size="small"
        />
        <Button
          size="medium"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleOnClick}
          onKeyDown={({ key }) => key === "Enter" && handleOnClick()}
          disabled={title.length === 0 || description.length === 0}
        >
          Add Task
        </Button>
      </Box>
    </>
  );
};

export default TaskForm;
