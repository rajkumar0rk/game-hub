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
  const [query,setQuery]=useState("")
  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar changeQuery={(val)=>setCategory(val)} />
        <SideBar  changeCategory={(val)=>setCategory(val)}  />
        <Main query={query} category={category} changeQuery={(val)=>setQuery(val)} changeCategory={(val)=>setCategory(val)} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
