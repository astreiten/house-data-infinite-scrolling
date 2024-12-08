import AppBar from "@mui/material/AppBar";
import GiteIcon from "@mui/icons-material/Gite";
import { Container, Toolbar, Typography, Box } from "@mui/material";
import { NAVBAR_TITLE } from "../../constants/constants";
import ModeSwitch from "./_components/ModeSwitch";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" sx={{ marginBottom: "2rem" }}>
      <Container maxWidth={false}>
        <Toolbar id="back-to-top-anchor">
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <GiteIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              {NAVBAR_TITLE}
            </Typography>
          </Box>
          <Box>
            <ModeSwitch checked={darkMode} onChange={handleToggle} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
