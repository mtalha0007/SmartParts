import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function CustomTabsWithContent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Set direction to column on xs and row on md
        }}
        value={value}
        onChange={handleChange}
        textColor="#df6a2d"
        aria-label="custom tabs example"
      >
        <Tab label="DESCRIPTION" sx={{ fontSize: "12px", '&:focus': { color: "#df6a2d", background: 'none', textDecoration: "none" } }} />
        <Tab label="ADDITIONAL INFORMATION" sx={{ fontSize: "12px", '&:focus': { color: "#df6a2d", background: 'none', textDecoration: "none" } }} />
        <Tab label="REVIEWS" sx={{ fontSize: "12px", '&:focus': { color: "#df6a2d", background: 'none', textDecoration: "none" } }} />
        <Tab label="Q & A" sx={{ fontSize: "12px", '&:focus': { color: "#df6a2d", background: 'none', textDecoration: "none" } }} />
        <Tab label="FAQ" sx={{ fontSize: "12px", '&:focus': { color: "#df6a2d", background: 'none', textDecoration: "none" } }} />
        <Tab label="UNLIMITED EXTRA TAB" sx={{ fontSize: "12px", '&:focus': { color: "#df6a2d", background: 'none', textDecoration: "none" } }} />
        <Tab label="UNLIMITED EXTRA TAB 2" sx={{ fontSize: "12px", '&:focus': { color: "#df6a2d", background: 'none', textDecoration: "none" } }} />

      </Tabs>
      <TabPanel value={value} index={0}>
        The brands offered by Auto Parts are reliable and well-known. This allows me to make choices comfortably without worrying about the quality of the products while shopping.      </TabPanel>
      <TabPanel value={value} index={1}>
        The brands offered by Auto Parts are reliable and well-known. This allows me to make choices comfortably without worrying about the quality of the products while shopping.      </TabPanel>
      <TabPanel value={value} index={2}>
        The brands offered by Auto Parts are reliable and well-known. This allows me to make choices comfortably without worrying about the quality of the products while shopping.      </TabPanel>
      <TabPanel value={value} index={3}>
        The brands offered by Auto Parts are reliable and well-known. This allows me to make choices comfortably without worrying about the quality of the products while shopping.      </TabPanel>
      <TabPanel value={value} index={4}>
        The brands offered by Auto Parts are reliable and well-known. This allows me to make choices comfortably without worrying about the quality of the products while shopping.      </TabPanel>
      <TabPanel value={value} index={5}>
        The brands offered by Auto Parts are reliable and well-known. This allows me to make choices comfortably without worrying about the quality of the products while shopping.      </TabPanel>
      <TabPanel value={value} index={6}>
        The brands offered by Auto Parts are reliable and well-known. This allows me to make choices comfortably without worrying about the quality of the products while shopping.      </TabPanel>

    </div>
  );
}

export default CustomTabsWithContent;
