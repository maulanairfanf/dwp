import { Alert, Box, Button, Card, CardActions, Divider, List, ListItem, Snackbar, Typography } from "@mui/material";
import { Language } from "@mui/icons-material";
import PropTypes from 'prop-types';
import { rupiah } from "../../utils/currency"; 
import { generateId, generateDate } from "../../utils/postProduct";
import fetch from "../../hooks/use-fetch";
import { useState } from "react";

export default function ProductCard({item}) {
  const [open, setOpen] = useState(false)

  async function handleBuy () {
    const params = {
      id: generateId(),
      product: item,
      created_at: generateDate()
    }
    try {
      const response = await fetch.post('/transaction', params)
      if (response) {
        setOpen(true)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: 2,
      }}
    >
      <Card size="lg" variant="outlined" >
        <Typography sx={{ margin: "10px"}} variant="h4">
          {item.name}
        </Typography>
        <Divider inset="none" />
        <List size="sm" >
          <ListItem sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Language fontSize="small" />
              <Typography display="block" >
                Internet
              </Typography>
            </Box>
            <Typography display="block">
              {item.internet} GB
            </Typography>
          </ListItem>
         <ListItem sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Language fontSize="small" />
              <Typography display="block" >
                Tiktok
              </Typography>
            </Box>
            <Typography display="block">
              {item.tiktok} GB
            </Typography>
          </ListItem>
          <ListItem sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Language fontSize="small" />
              <Typography display="block" >
                Youtube
              </Typography>
            </Box>
            <Typography display="block">
              {item.youtube} GB
            </Typography>
          </ListItem>
          <ListItem sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Language fontSize="small" />
              <Typography display="block" >
                Instagram
              </Typography>
            </Box>
            <Typography display="block">
              {item.instagram} GB
            </Typography>
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography sx={{ mr: 'auto' }}>
            {rupiah(item.price)} / {item.period}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuy}
          >
            Beli
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Success Buy
        </Alert>
      </Snackbar>
    </Box>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object
}