import { Grid } from "@mui/material";
import React from "react";

const MoviesContainer = ({ children }) => {
  return (
    <Grid
      container
      spacing={1}
      pt={5}
      sx={{
        minWidth: "100%",
        gap: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Grid>
  );
};

export default MoviesContainer;
