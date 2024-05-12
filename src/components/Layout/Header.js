import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../styles/style.css'
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleToggleDrawer = () => {
    setOpen(!open)
  }

  const drawer = (
    <Box sx={{ width: "240px", textAlign: "center", p: "16px 0"}}>
      <Typography color="goldenrod" variant='h6'>
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <Divider/>
        <List className='mobile-nav'>
          <ListItem>
            <NavLink to="/">
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/menu">
              Menu
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/about">
              About
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </ListItem>
        </List>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: "#000" }}>
          <Toolbar>
            <IconButton onClick={handleToggleDrawer}
              color={"inherit"} edge="start" sx={{ mr: 2, padding: '20px 10px', display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography color="goldenrod" variant='h6' sx={{ flexGrow: 1 }}>
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <List className='navigation-menu'>
                <ListItem>
                  <NavLink to="/">
                    Home
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/menu">
                    Menu
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/about">
                    About
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/contact">
                    Contact
                  </NavLink>
                </ListItem>
              </List>
            </Box>
            <Drawer open={open} onClick={handleToggleDrawer}>
              {drawer}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header