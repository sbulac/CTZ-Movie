import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [drawer, setDrawer] = useState(false);
  const [infoApi, setInfoApi] = useState({});
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);
  let url =
    "https://api.themoviedb.org/3/discover/movie?api_key=dd715a9cd97620efc4de9241c2abafaa";

  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get(url)
        .then((response) => {
          setMovies(response.data.results);
          console.log(movies);
          // setInfoApi(response.data);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <ApiContext.Provider
      value={{
        drawer,
        setDrawer,
        infoApi,
        movies,
        loading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
