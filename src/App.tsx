import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./Layouts/NavBar";
import GLtheme from "./theme";
import { Box, CssBaseline } from "@mui/material";
import SideBar from "./Layouts/SideBar";
import Main from "./Layouts/Main";
import { useState } from "react";

function App() {
  const theme = createTheme(GLtheme);
  const [category,setCategory]=useState("")
  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar changeCategory={(val)=>setCategory(val)}/>
        <SideBar  changeCategory={(val)=>setCategory(val)}  />
        <Main category={category}  />
      </Box>
    </ThemeProvider>
  );
}

export default App;
