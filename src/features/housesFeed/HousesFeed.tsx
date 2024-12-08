import { useCallback, useEffect, useState } from "react";
import HousesGroup from "./_components/HousesGroup";
import { IHouse } from "../../interfaces/IHouse";
import fetchHouses from "./_api/fetchHouses";
import { InView } from "react-intersection-observer";
import {
  HOUSES_PER_PAGE,
  MAX_RETRIES,
  NOHOUSES_TEXT,
  NORETRIES_TEXT,
  OBSERVER_THRESHOLD,
} from "../../constants/constants";
import Loader from "./_components/Loader";
import filterHousesByPrice from "./_utils/filterHousesByPrice";
import FilterHeader from "./_components/FilterHeader";
import Message from "./_components/Message";

const HousesFeed = () => {
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [hasFetchFailed, setHasFetchFailed] = useState(false);

  const processFetchedHouses = useCallback(
    (houses: IHouse[]) => {
      if (houses.length === 0) {
        setHasReachedEnd(true);
        return;
      }
      const filteredHouses = filterHousesByPrice(houses, maxPrice);
      setHouses((prev) => [...prev, ...filteredHouses]);
      setCurrentPage((prev) => prev + 1);
    },
    [maxPrice]
  );

  const fetchAndSetHouses = useCallback(
    async (retries = MAX_RETRIES) => {
      setIsFetching(true);
      try {
        const data = await fetchHouses(currentPage, HOUSES_PER_PAGE);
        if (data.ok) {
          processFetchedHouses(data.houses);
        } else if (retries > 0) {
          await fetchAndSetHouses(retries - 1);
        } else {
          setHasFetchFailed(true);
        }
      } finally {
        setIsFetching(false);
      }
    },
    [currentPage, processFetchedHouses]
  );

  const handleInView = (inView: boolean) => {
    if (inView && !isFetching) {
      fetchAndSetHouses();
    }
  };

  const handleMaxPriceChange = (newMaxPrice: number | undefined) => {
    setMaxPrice(newMaxPrice);
    setCurrentPage(1);
    setHouses([]);
  };

  useEffect(() => {
    if (houses.length === 0) {
      fetchAndSetHouses();
    }
  }, [houses, fetchAndSetHouses]);

  return (
    <>
      {houses.length > 0 && (
        <FilterHeader
          maxPrice={maxPrice}
          handleMaxPriceChange={handleMaxPriceChange}
        />
      )}
      <HousesGroup houses={houses} />
      {isFetching && <Loader />}
      {hasReachedEnd && <Message text={NOHOUSES_TEXT} />}
      {hasFetchFailed && <Message text={NORETRIES_TEXT} />}
      {houses.length > 0 && !hasReachedEnd && !hasFetchFailed && (
        <InView onChange={handleInView} threshold={OBSERVER_THRESHOLD}>
          {({ ref }) => <div ref={ref} data-testid="observer" />}
        </InView>
      )}
    </>
  );
};

export default HousesFeed;
