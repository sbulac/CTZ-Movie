import { Box, Grid } from "@mui/material";
import React from "react";
import MoviesContainer from "../components/MoviesContainer";
import { ApiContext } from "../components/Context/Context";
import SingleMovie from "../components/SingleMovie";

const HomePage = () => {
  return (
    <>
      <Box>
        <ApiContext.Consumer>
          {({ loading, movies }) => (
            <>
              {loading ? (
                <span>nada</span>
              ) : (
                <MoviesContainer>
                  {movies.map((item, index) => (
                    <Grid key={index} item xs={12}>
                      <SingleMovie
                        adult={item.adult}
                        title={item["original_title"]}
                        overview={item.overview}
                        popularity={item["vote_average"]}
                        poster={item["poster_path"]}
                      />
                    </Grid>
                  ))}
                </MoviesContainer>
              )}
            </>
          )}
        </ApiContext.Consumer>
      </Box>
    </>
  );
};

export default HomePage;
