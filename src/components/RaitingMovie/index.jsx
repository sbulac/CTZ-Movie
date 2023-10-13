import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/joy/CircularProgress";

export default function RaitingMovie({ raiting }) {
  raiting *= 10;
  let color;
  if (raiting >= 70) {
    color = "success";
  } else if (raiting >= 50 <= 69) {
    color = "warning";
  } else {
    color = "error";
  }
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 5,
        right: 5,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 100,
        p: 0.3,
      }}
    >
      <CircularProgress
        color={color}
        thickness={3}
        determinate
        size="md"
        value={raiting}
        variant="plain"
        sx={{ color: "#EEE" }}
      >
        {raiting}%
      </CircularProgress>
    </Box>
  );
}
