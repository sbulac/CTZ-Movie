import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

import React from "react";
import RaitingMovie from "../RaitingMovie";
import { Link } from "react-router-dom";
import { Movie } from "@mui/icons-material";

const SingleMovie = ({ poster, title, popularity, handleClick, MoviesId }) => {
  return (
    <Box
      sx={{
        maxWidth: 230,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Card
        sx={{
          width: "max-content",
          maxWidth: 231,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <CardActionArea
          onClick={handleClick}
          component={Link}
          to={`/${MoviesId}`}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500/${poster}`}
            sx={{
              borderRadius: "8px",
              height: { xs: 340.5, lg: 250 },
              objectFit: "cover",
              flexGrow: 1,
            }}
          />
          <Box
            sx={{
              height: { xs: 340.5, lg: 250 },
              width: "100%",
              position: "absolute",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)",
            }}
          >
            <Box sx={{ p: 1, textAlign: "start", color: "#FFF" }}>
              <Typography sx={{ fontSize: { xs: 18, lg: 12.5 } }} variant="h6">
                {title}
              </Typography>
            </Box>
            <RaitingMovie raiting={popularity} />
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SingleMovie;
