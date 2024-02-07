import {ReceiptLong, Settings, Wallet } from "@mui/icons-material";
import { Avatar, Box, Card, Divider, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from 'prop-types';
import Transaction from "../components/profile/Transaction";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Card sx={{ p: 2 }}>
          {children}
        </Card>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Profile() {
   const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Card>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{padding: 1}}
          >
            <Avatar sx={{ width: 48, height: 48}}>M</Avatar>
            <Typography>User 1</Typography>
          </Stack>
          <Divider />
          <Box sx={{padding: 1}}>
           <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="primary"
              textColor="primary"
          >
            <Tab sx={{display: "flex", justifyContent: "start"}} icon={<Wallet />} iconPosition="start" label="Wallet" {...a11yProps(0)}/>
            <Tab sx={{display: "flex", justifyContent: "start"}}icon={<ReceiptLong />} iconPosition="start" label="Transaction" {...a11yProps(1)}/>
            <Tab sx={{display: "flex", justifyContent: "start"}}icon={<Settings />} iconPosition="start" label="Settings" {...a11yProps(2)}/>
          </Tabs>
          
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={9}>
        <TabPanel value={value} index={0}>
          <Typography variant="h6">
            Content For Wallet
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Transaction />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h6">
             Content For Settings
          </Typography>
        </TabPanel>
      </Grid>
    </Grid>
  )
}
