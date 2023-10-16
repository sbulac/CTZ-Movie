import { Box, Grid } from "@mui/material";
import React from "react";
import MoviesContainer from "../components/MoviesContainer";
import { ApiContext } from "../components/Context/Context";
import SingleMovie from "../components/SingleMovie";
import PaginationLayout from "../components/Pagination";
import MovieSkeleton from "../components/MovieSkeleton";

const HomePage = () => {
  const MoviesSkeletonArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
          {({ loading, movies, setMoviesId, MoviesId }) => (
            <MoviesContainer>
              {loading ? (
                <>
                  {MoviesSkeletonArr.map((item, index) => (
                    <Grid
                      key={index}
                      sx={{ display: "flex", justifyContent: "center" }}
                      item
                      xs={12}
                      sm={5}
                      md={3}
                      lg={2}
                    >
                      <MovieSkeleton />
                    </Grid>
                  ))}
                </>
              ) : (
                <>
                  {movies.map((item, index) => (
                    <Grid key={index} item xs={12} sm={5} md={3} lg={2}>
                      <SingleMovie
                        handleClick={() => {
                          setMoviesId(item.id);
                        }}
                        MoviesId={item.id}
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
