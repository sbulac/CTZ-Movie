import { Box, Grid } from "@mui/material";
import React from "react";
import MoviesContainer from "../components/MoviesContainer";
import { ApiContext } from "../components/Context/Context";
import SingleMovie from "../components/SingleMovie";
import PaginationLayout from "../components/Pagination";
import MovieSkeleton from "../components/MovieSkeleton";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
        }}
      >
        <ApiContext.Consumer>
          {({ loading, movies }) => (
            <MoviesContainer>
              {loading ? (
                <>
                  <MovieSkeleton />
                  <MovieSkeleton />
                  <MovieSkeleton />
                  <MovieSkeleton />
                  <MovieSkeleton />
                </>
              ) : (
                <>
                  {movies.map((item, index) => (
                    <Grid key={index} item xs={12} sm={5} md={3} lg={2}>
                      <SingleMovie
                        adult={item.adult}
                        title={item["original_title"]}
                        overview={item.overview}
                        popularity={item["vote_average"]}
                        poster={item["poster_path"]}
                      />
                    </Grid>
                  ))}
                </>
              )}
            </MoviesContainer>
          )}
        </ApiContext.Consumer>
        <PaginationLayout />
      </Box>
    </>
  );
};

export default HomePage;
