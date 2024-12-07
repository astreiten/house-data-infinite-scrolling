import { useMediaQuery, useTheme } from "@mui/material";

const useDynamicColumns = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  const columns = isXs ? 1 : isSm ? 2 : isMd ? 3 : isLg ? 4 : isXl ? 4 : 4;

  return columns;
};

export default useDynamicColumns;
