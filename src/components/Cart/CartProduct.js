import { Box ,Grid, Input } from '@mui/material';
import React from 'react';
import { Images } from '../../assets/images';
import { RiDeleteBin6Line } from 'react-icons/ri';

function CartProduct({alignItems,display,flexDirection,margin}) {
  return (
    <Grid
    container
    alignItems={alignItems}
    sx={{
        flexDirection:flexDirection,
      paddingBottom: "15px",
      paddingLeft: "0px",
      margin: "0 auto",
      width: "98%",
    }}
    spacing={2}
  >
    <Grid xs={12} md={6}>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "15px" }}
      >
        <Box>
          <img style={{ width: "70px" }} src={Images.product2} />
        </Box>

        <Box
          sx={{
            textTransform: "uppercase",
            fontSize: "13px",
            fontWeight: "500",
          }}
        >
          <Box>Multi-Vehicle Automatic Transmission Fluid</Box>
          <Box sx={{ color: "#b20808" }}>$7.99 X 1</Box>
        </Box>
      </Box>
    </Grid>
    <Grid
      xs={12}
      md={6}
      sx={{ marginTop: { xs: "15px", md: "0px" } }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin:margin
        }}
      >
        <Box display="flex">
          <Box
            sx={{
              border: "1px solid #eaebed",
              padding: "4px 6px",
              cursor: "pointer",
              height: "100%",
            }}
            component="span"
          >
            +
          </Box>
          <Input
            value={"1"}
            disableUnderline                 
            sx={{
              width: "80px",
              border: "1px solid #eaebed",
              height: "100%",
              '& input': {
                textAlign: "center",
              }
            }}
          />
          <Box
            sx={{
              border: "1px solid #eaebed",
              padding: "4px 6px",
              cursor: "pointer",
              height: "100%",
            }}
            component="span"
          >
            -
          </Box>
        </Box>
        <Box sx={{ fontSize: "14px", color: "#b20808" ,display:display }}>$7.99</Box>
        <Box
          sx={{
            fontSize: "17px",
            color: "#ababab",
            cursor: "pointer",
          }}
        >
          <RiDeleteBin6Line />
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default CartProduct