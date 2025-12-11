import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useEffect, useState } from "react";
import productService from "../Services/productService";
import type { Category } from "../types/product";

const drawerWidth = 240;


const SideBar = () => {

  const [categories,setCategories]=useState<Category[]>([])
  useEffect(()=>{
    let cancel:()=>void
    const fetchData=async()=>{
     const {data,cancel:cancelCategory}= await productService.get("/categories");
     cancel=cancelCategory
     setCategories(data)
    }
    fetchData()
    return()=>cancel?.()
  },[])

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: 0,
          overflow: "hidden",
          position: "unset",
        },
      }}
    >
      <Toolbar sx={{ minHeight: "100px !important" }} />
      <Box sx={{ overflow: "hidden" }}>
        <Typography variant="h4" sx={{ pl: 4 }}>
          Category
        </Typography>
        <List>
          {categories.map((category) => (
            <ListItem key={category.slug} disablePadding>
              <ListItemButton sx={{ pl: 6 }} >
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
