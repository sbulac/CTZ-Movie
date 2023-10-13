import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../Context/Context";
import axios from "axios";

const DetailsMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { setLoading } = useContext(ApiContext);
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
  return <div>DetailsMovie {id}</div>;
};

export default DetailsMovie;
