import MUICard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import type { Product } from "../types/product";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from "@mui/material";

interface Props{
  product:Product,
  liked:boolean,
  changeLike:()=>void
}
export default function Card({product,liked,changeLike}:Props) {
  return (
    <MUICard sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {product.title}
          </Typography>
          <Typography component={"p"} sx={{ color: "text.secondary",mb:3 }}>
            {product.category}
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}  >
           <Typography variant={"body1"} component={"span"}>
            ${product.price}
          </Typography>
           {
            liked ?<FavoriteIcon onClick={changeLike}/>:<FavoriteBorderIcon onClick={changeLike}/>
           } 
          </Box>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
}
