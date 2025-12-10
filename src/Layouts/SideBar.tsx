import { Box, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import theme from '../theme';

const drawerWidth = 240;

const SideBar = () => {
  return (
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',borderRight:0,overflow: "hidden",position:"unset"},
          
        }}
      >
        <Toolbar sx={{minHeight: "100px !important",}} />
        <Box sx={{ overflow: 'hidden'}}>
          <Typography variant='h4' sx={{pl:4}}>Sidebar</Typography>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{pl:4}}>
                  <ListItemAvatar>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemAvatar>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

  )
}

export default SideBar