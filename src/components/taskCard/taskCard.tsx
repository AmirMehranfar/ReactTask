import { Box, Checkbox, ListItem, Typography } from "@mui/material";
import { TaskCardProps } from "./types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setTaskStatus } from "../../redux/taskSlice";

const TaskCard = ({
  task,
  providedDrag,
  snapshotDrag,
}: TaskCardProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <ListItem
      sx={{
        transition: ".3s ease background-color",
        color: snapshotDrag.isDragging ? "#fff" : "#000",
        bgcolor: snapshotDrag.isDragging ? "#000" : "#fff",
        position: "relative",
        my: 1,
        borderRadius: "3px",
        "& .MuiTypography-root": {
          display: "flex",
          alignItems: "center",
        },
        backgroundColor: task.completed ? "#dcedc8" : "#d1c4e9",
      }}
      ref={providedDrag.innerRef}
      {...providedDrag.draggableProps}
      {...providedDrag.dragHandleProps}
    >
      <Box width="100%" display="flex" gap='10px' alignItems="center" justifyContent="start">
        <Box display="flex" component="span">
          <Checkbox
            edge="end"
            value={task.completed}
            checked={task.completed}
            inputProps={{ "aria-label": "controlled" }}
            onChange={() =>
              dispatch(
                setTaskStatus({
                  completed: !task.completed,
                  id: task.id,
                })
              )
            }
          />
        </Box>
        <Box>
          <Typography width="100%" textAlign="right">
            {task.title}
          </Typography>
          <Typography width="100%" textAlign="right">
            {task.description}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default TaskCard;
