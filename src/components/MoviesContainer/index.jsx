import { Grid } from "@mui/material";
import React from "react";

const MoviesContainer = ({ children }) => {
  return (
    <Grid
      py={5}
      sx={{
        minWidth: "100%",
        display: "grid",
        gap: "30px",
        justifyContent: "center",
      }}
    >
      {children}
    </Grid>
  );
};

export default MoviesContainer;
