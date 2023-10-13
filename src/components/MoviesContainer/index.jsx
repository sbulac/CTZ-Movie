import { Grid } from "@mui/material";
import React from "react";

const MoviesContainer = ({ children }) => {
  return (
    <Grid
      pt={5}
      pb={3}
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
