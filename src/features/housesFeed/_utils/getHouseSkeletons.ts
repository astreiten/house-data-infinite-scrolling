const getHouseSkeletons = (
  housesLength: number,
  columns: number
): { id: string }[] => {
  if (housesLength % columns === 0) return [];
  const neededSkeletons = 4 - (housesLength % columns);
  return Array.from({ length: neededSkeletons }, (_, index) => {
    return { id: `skeleton-${index}` };
  });
};

export default getHouseSkeletons;
