import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [drawer, setDrawer] = useState(false);
  const [infoApi, setInfoApi] = useState({});
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  let url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc`;

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
          setMovies(response.data.results);
          setInfoApi(response.data);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.error(error);
    }
  }, [pageNumber]);
  return (
    <ApiContext.Provider
      value={{
        drawer,
        setDrawer,
        infoApi,
        movies,
        loading,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
