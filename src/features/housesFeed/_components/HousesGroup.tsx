import Grid from "@mui/material/Grid2";
import HouseCard from "./HouseCard";
import { IHouse } from "../../../interfaces/IHouse";

interface HouseCardProps {
  houses: IHouse[];
}

const HousesGroup = ({ houses }: HouseCardProps) => {
  return (
    <Grid container spacing={2} data-testid="houses-group">
      {houses.map((house) => (
        <HouseCard house={house} key={house.id} />
      ))}
    </Grid>
  );
};

export default HousesGroup;
