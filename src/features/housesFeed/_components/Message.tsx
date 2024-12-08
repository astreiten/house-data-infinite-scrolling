import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface MessageProps {
  text: string;
}
const Message = ({ text }: MessageProps) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Typography
        variant="h5"
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          fontWeight: "bold",
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default Message;
