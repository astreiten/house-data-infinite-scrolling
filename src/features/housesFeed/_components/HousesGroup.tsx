import Grid from "@mui/material/Grid2";
import HouseCard from "./HouseCard";
import { IHouse } from "../../../interfaces/IHouse";
import useDynamicColumns from "../_hooks/useDynamicColumns";
import getHouseSkeletons from "../_utils/getHouseSkeletons";
import HouseSkeleton from "./HouseSkeleton";

interface HousesGroupProps {
  houses: IHouse[];
}

const HousesGroup = ({ houses }: HousesGroupProps) => {
  const columns = useDynamicColumns();
  const skeletons = getHouseSkeletons(houses.length, columns);

  return (
    <Grid container spacing={2} data-testid="houses-group">
      {houses.map((house) => (
        <HouseCard {...house} key={house.id} />
      ))}
      {skeletons.map((skeleton) => (
        <HouseSkeleton key={skeleton.id} />
      ))}
    </Grid>
  );
};

export default HousesGroup;
