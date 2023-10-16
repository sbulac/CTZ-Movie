import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../Context/Context";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import MovieDetailsSkeleton from "../MovieDetailsSkeleton";

const DetailsMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { setLoading, loading } = useContext(ApiContext);
  let url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDcxNWE5Y2Q5NzYyMGVmYzRkZTkyNDFjMmFiYWZhYSIsInN1YiI6IjY1MjgxZWRiODEzODMxMDBjNDhhNWFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6KPof5fVW7pEiLybqvX0KHT0t-CJbREYsysz8TawbPI",
    },
  };

  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get(url, options)
        .then((response) => {
          setMovie(response.data);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.error(error);
    }
  }, [id]);
  console.log(movie);
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {loading ? (
        <MovieDetailsSkeleton />
      ) : (
        <Box
          sx={{
            color: "#EEE",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            py: 4,
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", textAlign: "center", fontSize: 31 }}
          >
            {movie["original_title"]}
          </Typography>
          {movie["poster_path"] ? (
            <Box
              sx={{
                height: 350,
                borderRadius: 1,
              }}
              component="img"
              src={`https://image.tmdb.org/t/p/w500${movie["poster_path"]}`}
            />
          ) : (
            <span>No hay imagen</span>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "start", fontWeight: 500 }}
            >
              Overview
            </Typography>
            <Typography>{movie["overview"]}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailsMovie;
