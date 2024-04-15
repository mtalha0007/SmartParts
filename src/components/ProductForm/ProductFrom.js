import React from 'react';
import { Box, Grid, Select, MenuItem, Typography, Button } from '@mui/material';

export default function ProductForm() {
  return (
    <Box sx={{ border: '1px solid #eaebed', p: 2 }}>
      <Typography sx={{padding:"2px 10px" ,fontWeight:"600"}} variant="h6" component="h2">
        Find Products
      </Typography>
      <Typography sx={{  padding:" 0px 10px" ,fontSize:"13px" }}>
        Complete the form to find the suitable part for your vehicle and proceed to the ordering step immediately!
      </Typography>
      <Box sx={{ bgcolor: '#f7f7f8', p: 2, border: '1px solid #eaebed', my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} sx={{padding:"4px"}}>
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              inputProps={{ 'aria-label': 'Select Make' }}
              sx={{fontSize:"13px"}}
            >
              <MenuItem value="">Select Make</MenuItem>
              {/* Add more MenuItem components here */}
            </Select>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{padding:"4px"}}>
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              inputProps={{ 'aria-label': 'Select Model' }}
              sx={{fontSize:"13px"}}
            >
              <MenuItem value="">Select Make First</MenuItem>
              {/* Add more MenuItem components here */}
            </Select>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{padding:"4px"}}>
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              inputProps={{ 'aria-label': 'Select Year' }}
              sx={{fontSize:"13px"}}
            >
              <MenuItem value="">Select Model</MenuItem>
              {/* Add more MenuItem components here */}
            </Select>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{padding:"4px"}}>
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              inputProps={{ 'aria-label': 'Select Year' }}
             sx={{fontSize:"13px"}}
            >
              <MenuItem sx={{fontSize:"1px"}} value="">Select Year</MenuItem>
              {/* Add more MenuItem components here */}
            </Select>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button   sx={{ width: '100%',color:"white",padding:"7px" ,backgroundColor:"#eaaf91" ,textTransform:"capitalize",'&:hover':{
              backgroundColor:"#eaaf91" 
            }}}>
              Find Auto Parts
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} md={12} lg={12}>
            <Button   sx={{ width: '100%',color:"white",padding:"7px" ,backgroundColor:"#1e96fc" ,textTransform:"capitalize",'&:hover':{
              backgroundColor:"#1e96fc" 
            }}}>
              All Products
            </Button>
          </Grid>
    </Box>
  );
}