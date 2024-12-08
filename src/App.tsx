import { Fab, styled } from "@mui/material";
import HousesFeed from "./features/housesFeed/HousesFeed";
import Navbar from "./layout/navbar/Navbar";
import ScrollTop from "./layout/scrollTop/scrollTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import darkTheme from "./themes/darkTheme";
import lightTheme from "./themes/lightTeme";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HousesFeed />
        <ScrollTop>
          <Fab size="large" color="primary">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled("div")(() => ({
  overflowY: "auto",
}));
