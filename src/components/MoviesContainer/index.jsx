import { Grid } from "@mui/material";
import React from "react";

const MoviesContainer = ({ children }) => {
  return (
    <Grid
    py={5}
      sx={{ minWidth: { xs: "100vw", display: "grid", gap: "30px" } }}
    >
      {children}
    </Grid>
  );
};

export default MoviesContainer;
