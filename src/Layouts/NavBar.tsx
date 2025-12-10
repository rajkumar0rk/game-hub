import {
  AppBar,
  Box,
  FormControlLabel,
  IconButton,

  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useColorScheme } from "@mui/material/styles";
import Switch from "../components/Switch"
import Search from "../components/Search";
import Logo from '../assets/logo.webp'
import theme from "../theme";



const NavBar = () => {
  const { mode, setMode } = useColorScheme();
  return (
      <AppBar position="absolute"  enableColorOnDark elevation={0}  sx={{ 
        boxShadow: 0, 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color:(theme)=>theme.palette.text.primary,
        bgcolor:(theme)=>theme.palette.background.default}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src={Logo} style={{ width: "70px", height: "70px" }} />
          </IconButton>
          <Search />
          
          <Box sx={{  }}>
            <FormControlLabel
              control={<Switch sx={{ m: 1 }} checked={mode === "dark" ? true : false} onChange={(e) => setMode(e.target.checked ? "dark" : "light")} />}
              label="Dark Mode"
            />

          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default NavBar;
