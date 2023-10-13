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
      <Card
        sx={{
          width: "max-content",
          maxWidth: 231,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <CardActionArea
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
              borderRadius: "15px",
              height: 340.5,
              objectFit: "cover",
              flexGrow: 1,
            }}
          />
          <Box
            sx={{
              height: 340.5,
              width: "100%",
              position: "absolute",
              background: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 70%)"
            }}
          >
            <Box sx={{ p: 1, textAlign: "start", color: "#EEE" }}>
              <Typography sx={{ fontSize: 18 }} variant="h6">
                {title}
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SingleMovie;
