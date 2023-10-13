import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/joy/CircularProgress";

export default function RaitingMovie({ raiting }) {
  console.log(raiting * 10);
  return (
    <Box sx={{ position: "absolute", bottom: 5, right: 5 }}>
      <CircularProgress
        determinate
        size="md"
        value={raiting * 10}
        variant="soft"
        sx={{ color: "#EEE" }}
      >
        {raiting * 10}%
      </CircularProgress>
    </Box>
  );
}
