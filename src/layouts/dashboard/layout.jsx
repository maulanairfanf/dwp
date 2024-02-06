import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange } from '@mui/material/colors';

export default function MainLayout () {
  const pages = ['Products', 'Pricing', 'Blog'];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

   const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('e.target.value', event.target.value)
      navigate({
        pathname: "home",
        search: `?name=${event.target.value}`
      })
    }
  };
  return (
    <>
      <AppBar position="static" sx={{ bgcolor:"white"}} >
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent: "space-between", alignItems:"center" } }}>
              <Box sx={{display: { } }}>
                <TextField id="outlined-basic" placeholder='Search' variant="outlined" size="small" onKeyDown={handleKeyDown}/>
              </Box>
              <Box sx={{display: { xs: 'none', md: 'flex', alignItems: "center", justifyContent: "center"} }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
                <Avatar sx={{ bgcolor: deepOrange[500], width: 24, height: 24 }} sizes='sm'>N</Avatar>
              </Box>
              <Avatar sx={{ display: { md: 'none' }, bgcolor: deepOrange[500], width: 24, height: 24 }} sizes='sm'>N</Avatar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{marginTop: "10px"}}>
        <Outlet />
      </Container>
    </>
  )
}

