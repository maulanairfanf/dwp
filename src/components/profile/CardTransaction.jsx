import { Language, LocalMall } from '@mui/icons-material'
import { Alert, Box, Button, Chip, Divider, List, ListItem, Snackbar, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import { useState } from 'react';
import fetch from '../../hooks/use-fetch';

export default function CardTransaction({item, fetchData}) {
  const [open, setOpen] = useState(false)

  async function handleDelete () {
    console.log('click')
    try {
      const response = await fetch.delete('/transaction/' + item.id)
      if (response) {
        setOpen(true)
        fetchData()
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
    <Box sx={{marginTop: 2}}>
      <Box sx={{display: "flex", justifyContent: "start", alignItems: "center", marginBottom: 2}}>
        <LocalMall />
        <Typography sx={{marginLeft: 2}} variant="h6">Buy</Typography>
        <Typography sx={{marginLeft: 2, marginTop: 1}} variant="caption" >{item.created_at}</Typography>
        <Chip sx={{marginLeft: 2, marginTop: 1}} label="Success" color="success" size="small"  />
      </Box>
      <Typography variant="h6">Paket A</Typography>
      <List size="sm" >
        <ListItem sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Language fontSize="small" />
            <Typography display="block" >
              Internet
            </Typography>
          </Box>
          <Typography display="block">
            {item.product.internet} GB
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
            {item.product.tiktok} GB
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
            {item.product.youtube} GB
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
            {item.product.instagram} GB
          </Typography>
        </ListItem>
      </List>
      <Box sx={{display: "flex", justifyContent: "end", alignItems: "center", marginBottom: 2}}>
        <Button variant="contained" color="error" size="small" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
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
          Success Delete
        </Alert>
      </Snackbar>
    </Box>
  )
}

CardTransaction.propTypes = {
  item: PropTypes.object,
  fetchData: PropTypes.func
}