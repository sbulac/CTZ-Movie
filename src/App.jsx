import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HomePage from "./Pages/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { ApiProvider } from "./components/Context/Context";

function App() {
  return (
    <ApiProvider>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography
              component="h1"
              variant="h4"
              fontWeight={400}
              color="inherit"
              sx={{ flexGrow: 1 }}
            >
              CTZ-Movie
            </Typography>
            <NavBar />
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
    </ApiProvider>
  );
}

export default App;
