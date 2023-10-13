import { Box, Skeleton } from "@mui/material";
import React from "react";

const MovieSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        backgroundColor: "#B3B6B7",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        position: "relative",
      }}
    >
      <Skeleton variant="rectangular" width={227} height={340.5} />
      <Box
        sx={{
          position: "absolute",
          height: "100%",
        }}
      >
        <Skeleton variant="text" width={200} height={40} />
      </Box>
    </Box>
  );
};

export default MovieSkeleton;
