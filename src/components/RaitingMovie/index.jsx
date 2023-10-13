import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/joy/CircularProgress";

export default function RaitingMovie({ raiting }) {
  raiting = raiting * 10;
  console.log(raiting);
  let color;
  if (raiting >= 70) {
    color = "success";
  } else if (raiting >= 50 <= 69) {
    color = "warning";
  } else {
    color = "error";
  }
  return (
    <Box sx={{ position: "absolute", bottom: 5, right: 5 }}>
      <CircularProgress
        color={color}
        determinate
        size="md"
        value={raiting}
        variant="soft"
        sx={{ color: "#EEE" }}
      >
        {raiting}%
      </CircularProgress>
    </Box>
  );
}
