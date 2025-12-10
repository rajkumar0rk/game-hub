import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./Layouts/NavBar";
import GLtheme from "./theme";
import { Box, CssBaseline } from "@mui/material";
import SideBar from "./Layouts/SideBar";
import Main from "./Layouts/Main";

function App() {
  const theme = createTheme(GLtheme);
  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar />
        <SideBar />
        <Main />
      </Box>
    </ThemeProvider>
  );
}

export default App;
