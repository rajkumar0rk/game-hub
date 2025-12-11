import { Box, Grid, Toolbar, Typography } from "@mui/material";
import Card from "../components/Card";
import Select from "../components/Select";
import useProduct from "../Hooks/useProduct";

const Main = () => {
  const {sort, order, filter, products, isLike, setFilter, setLiked}=useProduct()
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 7 }}>
      <Toolbar />
      <Typography variant="h1">Products</Typography>

      <Box sx={{ my: 3, display: "flex" }}>
        <Select placeHolder={filter.sort.name} values={sort} changeFilter={(val) => setFilter({ ...filter, sort: val })} />
        <Select placeHolder={filter.order.name} values={order} changeFilter={(val)=>setFilter({...filter,order:val})} />
      </Box>
      <Grid container spacing={4}>

        {
          products.length  > 0 ?
          products.map((product) => (
            <Grid size={4}>
              <Card product={product} liked={isLike} changeLike={()=>setLiked(!isLike)}  />
            </Grid>
          )):<Typography variant="h3" > No product found...</Typography>
        }

      </Grid>
    </Box>
  );
};

export default Main;
