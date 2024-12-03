import { useCallback, useEffect, useState } from "react";
import HousesGroup from "./_components/HousesGroup";
import { IHouse } from "../../interfaces/IHouse";
import fetchHouses from "./_api/fetchHouses";
import { InView } from "react-intersection-observer";
import IntersectionObserver from "./_components/IntersectionObserver";

const HousesFeed = () => {
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchAndSetHouses = useCallback(
    async (retries = 5) => {
      setIsFetching(true);
      try {
        const data = await fetchHouses(houses.length / 9 + 1, 12);
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
      {houses.length > 0 && (
        <InView onChange={handleInView} threshold={0.5}>
          {({ ref }) => (
            <IntersectionObserver ref={ref} isFetching={isFetching} />
          )}
        </InView>
      )}
    </>
  );
};

export default HousesFeed;
