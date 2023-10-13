import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../Context/Context";
import axios from "axios";
import { Box, Typography } from "@mui/material";

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
    <Box>
      {loading ? (
        <span></span>
      ) : (
        <>
          <Box
            component="img"
            width={250}
            height={400}
            src={`https://image.tmdb.org/t/p/w500/${movie["poster_path"]}`}
          />
          <Typography>{movie["original_title"]}</Typography>
          <br />
          <Typography>{movie.overview}</Typography>
          <br />
          {movie["production_companies"].map((item, index) => (
            <Box key={index}>
              <Typography>{item.name}</Typography>
              {item["logo_path"] ? (
                <Box
                  component="img"
                  src={`https://image.tmdb.org/t/p/w500/${item["logo_path"]}`}
                />
              ) : (
                <span>No Image</span>
              )}
            </Box>
          ))}
          <br />
          {movie["production_countries"].map((item) => (
            <Typography key={item.name}>{item.name}</Typography>
          ))}
        </>
      )}
    </Box>
  );
};

export default DetailsMovie;
