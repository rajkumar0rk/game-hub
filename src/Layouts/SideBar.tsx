import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import productService from "../Services/productService";
import type { Category } from "../types/product";

const drawerWidth = 240;

const SideBar = ({
  changeCategory,
}: {
  changeCategory: (val: string) => void;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    let cancel: () => void;
    const fetchData = async () => {
      const { data, cancel: cancelCategory } = await productService.getAll(
        "/categories"
      );
      cancel = cancelCategory;
      setCategories(data);
    };
    fetchData();
    return () => cancel?.();
  }, []);

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
              <ListItemButton
                sx={{ pl: 6 }}
                onClick={() => {
                  const key = category.url.split("/");
                  changeCategory(key.filter((k, index) => index > key.length - 3).join("/"));
                }}
              >
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
