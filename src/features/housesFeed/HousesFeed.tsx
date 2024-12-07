import { useCallback, useEffect, useState } from "react";
import HousesGroup from "./_components/HousesGroup";
import { IHouse } from "../../interfaces/IHouse";
import fetchHouses from "./_api/fetchHouses";
import { InView } from "react-intersection-observer";
import { HOUSES_PER_PAGE } from "../../constants/constants";
import Loader from "./_components/Loader";
import filterHousesByPrice from "./_utils/filterHousesByPrice";
import FilterHeader from "./_components/FilterHeader";

const HousesFeed = () => {
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const fetchAndSetHouses = useCallback(
    async (retries = 5) => {
      setIsFetching(true);
      try {
        const data = await fetchHouses(currentPage, HOUSES_PER_PAGE);
        if (data.ok) {
          const filteredHouses = filterHousesByPrice(data.houses, maxPrice);
          setHouses((prevHouses) => [...prevHouses, ...filteredHouses]);
          setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        } else if (retries > 0) {
          await fetchAndSetHouses(retries - 1);
        }
      } finally {
        setIsFetching(false);
      }
    },
    [currentPage, maxPrice]
  );

  const handleInView = (inView: boolean) => {
    console.log(inView);
    if (inView && !isFetching) {
      fetchAndSetHouses();
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setHouses([]);
  }, [maxPrice]);

  useEffect(() => {
    if (houses.length === 0) {
      fetchAndSetHouses();
    }
  }, [houses, fetchAndSetHouses]);

  return (
    <>
      <FilterHeader maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
      <HousesGroup houses={houses} />
      {isFetching && <Loader />}
      {houses.length > 0 && (
        <InView onChange={handleInView} threshold={0.5}>
          {({ ref }) => <div ref={ref} />}
        </InView>
      )}
    </>
  );
};

export default HousesFeed;
