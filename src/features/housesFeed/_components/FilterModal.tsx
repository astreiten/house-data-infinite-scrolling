import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Slider, Button, styled } from "@mui/material";
import { useState } from "react";
import {
  APPLY_MODAL_LABEL,
  CANCEL_MODAL_LABEL,
  MAXPRICE_MAXVALUE,
  MAXPRICE_MINVALUE,
  MAXPRICE_MODAL_LABEL,
} from "../../../constants/constants";

interface FilterModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  maxPrice: number | undefined;
  handleMaxPriceChange: (newMaxPrice: number | undefined) => void;
}

const FilterModal = ({
  open,
  setOpen,
  maxPrice,
  handleMaxPriceChange,
}: FilterModalProps) => {
  const handleClose = () => setOpen(false);
  const [sliderValue, setSliderValue] = useState<number>(
    maxPrice ?? MAXPRICE_MINVALUE
  );
  const handleApply = () => {
    handleMaxPriceChange(sliderValue);
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <StyledBox>
          <Typography sx={{ marginBottom: "2rem", fontWeight: 600 }}>
            {MAXPRICE_MODAL_LABEL}
          </Typography>
          <Slider
            size="medium"
            min={MAXPRICE_MINVALUE}
            max={MAXPRICE_MAXVALUE}
            valueLabelDisplay="on"
            value={sliderValue}
            onChange={(_, value) => {
              setSliderValue(value as number);
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClose}
              sx={{ mr: 1 }}
            >
              {CANCEL_MODAL_LABEL}
            </Button>
            <Button variant="contained" color="primary" onClick={handleApply}>
              {APPLY_MODAL_LABEL}
            </Button>
          </Box>
        </StyledBox>
      </Modal>
    </div>
  );
};

export default FilterModal;

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
}));
