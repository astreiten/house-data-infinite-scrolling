import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import React from "react";

interface HouseCardProps {
  id: number;
  address: string;
  homeowner: string;
  price: number;
  photoURL: string;
}

const HouseCard = React.memo(
  ({ id, address, homeowner, price, photoURL }: HouseCardProps) => {
    return (
      <Grid
        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
        data-testid="house-item"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "23rem",
            height: "26rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              src={photoURL}
              alt={address}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <AttachMoneyIcon sx={{ mr: 1 }} />
                {price}
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
                color="text.primary"
              >
                <LocationOnIcon sx={{ mr: 1 }} />
                {address}
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
                color="text.secondary"
              >
                <PersonIcon sx={{ mr: 1 }} />
                {homeowner}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
            <Button size="small" color="primary" variant="outlined">
              Share
            </Button>
            <Button size="small" color="primary" variant="contained">
              Contact
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
);

export default HouseCard;
