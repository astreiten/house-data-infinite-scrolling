import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid2";
import { IHouse } from "../../../interfaces/IHouse";

interface HouseCardProps {
  house: IHouse;
}

const HouseCard = ({ house }: HouseCardProps) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: "23rem", height: "25rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            src={house.photoURL}
            alt={house.address}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`$${house.price}`}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {house.address}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {house.homeowner}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default HouseCard;
