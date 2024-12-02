import { forwardRef } from "react";
import Loader from "./Loader";
import { styled } from "@mui/material/styles";

interface IntersectionObserverProps {
  isFetching: boolean;
}

const IntersectionObserver = forwardRef<
  HTMLDivElement,
  IntersectionObserverProps
>((props, ref) => {
  const isFetching = props;
  return <StyledDiv ref={ref}>{isFetching && <Loader />}</StyledDiv>;
});

export default IntersectionObserver;

const StyledDiv = styled("div")(({ theme }) => ({
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
