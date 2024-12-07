import { IHouse } from "../../../interfaces/IHouse";

const filterHousesByPrice = (
  houses: IHouse[],
  maxPrice: number | undefined
) => {
  return maxPrice ? houses.filter((house) => house.price <= maxPrice) : houses;
};

export default filterHousesByPrice;
