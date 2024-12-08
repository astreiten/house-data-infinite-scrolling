import { Button, Chip, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FilterModal from "./FilterModal";
import { useState } from "react";
import {
  FILTER_BUTTON_LABEL,
  MAXPRICE_CHIP_LABEL,
} from "../../../constants/constants";

interface FilterHeaderProps {
  maxPrice: number | undefined;
  handleMaxPriceChange: (newMaxPrice: number | undefined) => void;
}

const FilterHeader = ({
  maxPrice,
  handleMaxPriceChange,
}: FilterHeaderProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Container container>
      <FilterModal
        open={openModal}
        setOpen={setOpenModal}
        maxPrice={maxPrice}
        handleMaxPriceChange={handleMaxPriceChange}
      />
      <Grid
        size={{ xs: 4, sm: 1, md: 1, lg: 1, xl: 1 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "1rem",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          {FILTER_BUTTON_LABEL}
        </Button>
      </Grid>
      {maxPrice !== undefined && (
        <Grid>
          <Chip
            label={`${MAXPRICE_CHIP_LABEL}${maxPrice}`}
            onDelete={() => handleMaxPriceChange(undefined)}
            color="primary"
            sx={{ ml: 1 }}
          />
        </Grid>
      )}
    </Container>
  );
};

export default FilterHeader;

const Container = styled(Grid)(() => ({
  marginBottom: "2rem",
}));
