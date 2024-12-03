import AppBar from "@mui/material/AppBar";
import GiteIcon from "@mui/icons-material/Gite";
import { Container, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: "2rem" }}>
      <Container maxWidth="xl" sx={{ margin: 0 }}>
        <Toolbar disableGutters id="back-to-top-anchor">
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
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Houses Feed
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
