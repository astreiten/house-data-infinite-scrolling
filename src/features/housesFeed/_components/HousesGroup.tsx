import Grid from "@mui/material/Grid2";
import HouseCard from "./HouseCard";
import { IHouse } from "../../../interfaces/IHouse";

interface HouseCardProps {
  houses: IHouse[];
}

const HousesGroup = ({ houses }: HouseCardProps) => {
  console.log("entro con " + houses.length);
  return (
    <Grid container spacing={2} data-testid="houses-group">
      {houses.map((house) => (
        <HouseCard {...house} key={house.id} />
      ))}
    </Grid>
  );
};

export default HousesGroup;
