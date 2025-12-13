import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

import useCategories from '../Hooks/useCategories'

const drawerWidth = 240

interface Props {
  changeUrlPath: (path: string) => void
}
const SideBar = ({ changeUrlPath }: Props) => {
  const { categories } = useCategories()
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: 0,
          overflow: 'hidden',
          position: 'unset',
        },
      }}
    >
      <Toolbar sx={{ minHeight: '100px !important' }} />
      <Box sx={{ overflow: 'hidden' }}>
        <Typography variant="h4" sx={{ pl: 4 }}>
          Category
        </Typography>
        <List>
          {categories.map((category) => (
            <ListItem key={category.slug} disablePadding>
              <ListItemButton
                sx={{ pl: 6 }}
                onClick={() => {
                  changeUrlPath('category/' + category.slug)
                }}
              >
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideBar
