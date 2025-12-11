import { Box, Grid, Toolbar, Typography } from "@mui/material";
import Card from "../components/Card";
import Select from "../components/Select";
import useProduct from "../Hooks/useProduct";
import type { SelectList } from "../types/select";
import productService from "../Services/productService";
import { useEffect } from "react";

const Main = ({category}:{category:string}) => {
  const { sort, order, filter, products, isLike, setFilter, setLiked ,setProducts} = useProduct()
   useEffect(()=>{
    const fetch=async()=>{
      if(category){
        let key =category.split("/")
        const { data:getProduct } = await productService.get("/category/"+key[key.length-1])
        setProducts(getProduct.products)
      }
    }
    fetch()
  },[category])
  const handleFilterChange =async (val:SelectList,filterBy:string) => {
    let filters={...filter, [filterBy]: val }
    setFilter(filters)

    const { data:getProduct } = await productService.get(`?sortBy=${filters.sort.slug}&order=${filters.order.slug}`)
    setProducts(getProduct.products)
  }
 
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 7 }}>
      <Toolbar />
      <Typography variant="h1">Products</Typography>

      <Box sx={{ my: 3, display: "flex" }}>
        <Select placeHolder={filter.sort.name} values={sort} changeFilter={(val)=>handleFilterChange(val,"sort")} />
        <Select placeHolder={filter.order.name} values={order} changeFilter={(val)=>handleFilterChange(val,"order")} />
      </Box>
      <Grid container spacing={4}>

        {
          products.length > 0 ?
            products.map((product) => (
              <Grid size={4}>
                <Card product={product} liked={isLike} changeLike={() => setLiked(!isLike)} />
              </Grid>
            )) : <Typography variant="h3" > No product found...</Typography>
        }

      </Grid>
    </Box>
  );
};

export default Main;
