import { Fab, styled } from "@mui/material";
import "./App.css";
import HousesFeed from "./features/housesFeed/HousesFeed";
import Navbar from "./layout/navbar/Navbar";
import ScrollTop from "./layout/scrollTop/scrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  return (
    <Container>
      <Navbar />
      <HousesFeed />
      <ScrollTop>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
}

export default App;

const Container = styled("div")(() => ({
  overflowY: "auto",
}));
