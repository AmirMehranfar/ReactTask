import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TaskLayout from "./components/taskLayout/TaskLayout";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { reorder } from "./redux/taskSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    dispatch(
      reorder({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      })
    );
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container justifyContent="center">
        <DragDropContext onDragEnd={(res) => onDragEnd(res)}>
          <Grid>
            <TaskLayout />
          </Grid>
        </DragDropContext>
      </Grid>
    </Container>
  );
}

export default App;
