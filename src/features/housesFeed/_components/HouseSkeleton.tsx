import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid2";
import React from "react";
import { Skeleton } from "@mui/material";

const HouseSkeleton = React.memo(() => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
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
          <Skeleton variant="rectangular" height={200} />
          <CardContent>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </CardActions>
      </Card>
    </Grid>
  );
});

export default HouseSkeleton;
