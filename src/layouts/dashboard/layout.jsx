import { AppBar, Avatar, Box, Button, Container, Divider, IconButton, ListItemIcon, Menu, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout,  ReceiptLong } from '@mui/icons-material';
import { useAuth } from '../../hooks/use-auth';
export default function MainLayout () {
  const pages = ['Home'];
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [anchorAvatar, setAnchorAvatar] = useState(null);
  const open = Boolean(anchorAvatar);
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const navigate = useNavigate();
  const auth = useAuth();

  const handleClick = (event) => {
    setAnchorAvatar(event.currentTarget);
  };

  const handleClose = (route) => {
    setAnchorAvatar(null);
    console.log('route', route)
    if (route) navigate('/' + route)

  };

  const handleOpenNavMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleCloseNavMenu = (route) => {
    setAnchorMenu(null);
    if (route === 'Home') navigate('/')
  };

   const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate({
        pathname: '/',
        search: `?${createSearchParams({sort : sort, 'price-range' : priceRange, name: event.target.value })}`

      })
    }
  };

  const handleLogout = () => {
    auth.signOut()
  }
  

  useEffect(() => {
    if (searchParams.get('price-range')) setPriceRange(searchParams.get('price-range'))
    if (searchParams.get('sort')) setSort(searchParams.get('sort'))
  },[searchParams])
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
                anchorEl={anchorMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorMenu)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
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
                    onClick={() => handleCloseNavMenu(page)}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 1 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 24, height: 24 }}>M</Avatar>
                </IconButton>
              </Box>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 1, display: { md: 'none' } }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 24, height: 24 }}>M</Avatar>
                </IconButton>
               <Menu
                anchorEl={anchorAvatar}
                id="account-menu"
                open={open}
                onClose={() => handleClose()}
                onClick={() => handleClose()}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={() => handleClose('profile')}>
                <Avatar /> Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
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

