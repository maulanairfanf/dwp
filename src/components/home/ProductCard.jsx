import { Box, Button, Card, CardActions, Divider, List, ListItem, Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import PropTypes from 'prop-types';
import { rupiah } from "../../utils/currency"; 

export default function ProductCard({item}) {
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
              <LanguageIcon fontSize="small" />
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
              <LanguageIcon fontSize="small" />
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
              <LanguageIcon fontSize="small" />
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
              <LanguageIcon fontSize="small" />
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
          >
            Beli
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object
}