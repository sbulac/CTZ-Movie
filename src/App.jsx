import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { ApiProvider } from "./components/Context/Context";
import DetailsMovie from "./components/DetailsMovie";

function App() {
  return (
    <ApiProvider>
      <Box sx={{ backgroundColor: "#121212" }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "#16162A" }}>
            <Typography
              component="h1"
              variant="h4"
              fontWeight={400}
              color="inherit"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              CTZ-Movie
            </Typography>
            <NavBar />
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailsMovie />} />
        </Routes>
      </Box>
    </ApiProvider>
  );
}

export default App;
