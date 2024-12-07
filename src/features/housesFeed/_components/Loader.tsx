import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";

const Loader = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ minHeight: "100px", marginTop: "1rem" }}
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
