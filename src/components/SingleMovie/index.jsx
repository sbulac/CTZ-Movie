import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const SingleMovie = ({ poster, title }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card sx={{ width: "max-content", borderRadius: "15px", maxWidth: 232 }}>
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500/${poster}`}
            sx={{
              height: 350,
              objectFit: "contain",
              flexGrow: 1,
            }}
          />
          <Box sx={{ p: 1, textAlign: "center"}}>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SingleMovie;
