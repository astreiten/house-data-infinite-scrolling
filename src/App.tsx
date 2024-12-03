import { Fab } from "@mui/material";
import "./App.css";
import HousesFeed from "./features/housesFeed/HousesFeed";
import Navbar from "./layout/navbar/Navbar";
import ScrollTop from "./layout/scrollTop/scrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  return (
    <>
      <Navbar />
      <HousesFeed />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
