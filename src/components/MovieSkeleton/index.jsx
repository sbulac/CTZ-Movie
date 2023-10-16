import { Box, Skeleton } from "@mui/material";
import React from "react";

const MovieSkeleton = () => {
  return (
    <Box
      sx={{
        width: "max-content",
        height: "max-content",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        position: "relative",
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          height: { xs: 340.5, lg: 250 },
          width: { xs: 227, lg: 166.67 },
          borderRadius: "8px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          height: "100%",
        }}
      >
        <Skeleton
          variant="text"
          sx={{
            width: { xs: 200, lg: 150 },
            height: { xs: 40, lg: 30 },
            mt: 0.5,
          }}
        />
      </Box>
    </Box>
  );
};

export default MovieSkeleton;
