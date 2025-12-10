import { Box, Grid, Toolbar, Typography } from "@mui/material";
import Card from "../components/Card";
import Select from "../components/Select";

const Main = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 7 }}>
      <Toolbar />
      <Typography variant="h2">Products</Typography>

      <Box sx={{ my: 3 }}>
        <Select />
        <Select />
      </Box>
      <Grid container spacing={4}>
        <Grid size={4}>
          <Card />
        </Grid>
        <Grid size={4}>
          <Card />
        </Grid>
        <Grid size={4}>
          <Card />
        </Grid>
        <Grid size={4}>
          <Card />
        </Grid>
        <Grid size={4}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
