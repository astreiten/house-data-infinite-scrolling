import { useCallback, useEffect, useState } from "react";
import HousesGroup from "./_components/HousesGroup";
import { IHouse } from "../../interfaces/IHouse";
import fetchHouses from "./_api/fetchHouses";
import { InView } from "react-intersection-observer";
import { HOUSES_PER_PAGE } from "../../constants/constants";
import Loader from "./_components/Loader";

const HousesFeed = () => {
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchAndSetHouses = useCallback(
    async (retries = 5) => {
      setIsFetching(true);
      try {
        const data = await fetchHouses(houses.length / 12 + 1, HOUSES_PER_PAGE);
        if (data.ok) {
          setHouses((prevHouses) => [...prevHouses, ...data.houses]);
        } else if (retries > 0) {
          await fetchAndSetHouses(retries - 1);
        }
      } finally {
        setIsFetching(false);
      }
    },
    [houses]
  );

  const handleInView = (inView: boolean) => {
    if (inView && !isFetching) {
      fetchAndSetHouses();
    }
  };

  useEffect(() => {
    if (houses.length === 0) {
      fetchAndSetHouses();
    }
  }, [houses, fetchAndSetHouses]);

  return (
    <>
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
