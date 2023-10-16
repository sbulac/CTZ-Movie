import { Box, Skeleton } from "@mui/material";
import React from "react";

const MovieDetailsSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        py: 4,
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "max-content",
          height: "max-content",
        }}
      >
        <Skeleton
          sx={{ borderRadius: 1 }}
          variant="rectangular"
          width={320}
          height={80}
        />
      </Box>
      <Box
        sx={{
          width: "max-content",
          height: "max-content",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={233}
          sx={{ borderRadius: 1 }}
          height={350}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          width: "100%",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={233}
          sx={{ borderRadius: 1 }}
          height={40}
        />
        <Skeleton
          variant="rectangular"
          width={358.4}
          sx={{ borderRadius: 1 }}
          height={200}
        />
      </Box>
    </Box>
  );
};

export default MovieDetailsSkeleton;
