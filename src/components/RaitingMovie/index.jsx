import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function RaitingMovie({ raiting }) {
  const value = raiting / 2;

  return (
    <Box
      sx={{
        width: 120,
        display: "flex",
        alignItems: "center",
        ml: 1,
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        size="small"
        readOnly
        precision={0.25}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
}
