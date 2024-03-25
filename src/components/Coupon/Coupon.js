import { Box } from '@mui/material'
import React from 'react'

function Coupon() {
  return (
    <Box
    sx={{
      height: "110px",
      maxWidth: "250px",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "auto",
      filter: "drop-shadow(0 3px 5px rgba(0, 0, 0, .5))",
      display: "flex",
      alignItems: "stretch",
      position: "relative",
      textTransform: "uppercase",
      "&:after":{
        right: "0", 
        content: '""',
        position: "absolute",
        top: "0",
        width: "50%",
        height: "100%",
        zIndex: "-1",
        backgroundImage: "radial-gradient(circle at 100% 50%, transparent 25px, gold 26px)"
      },
      "&:before": {
        left: "0",
        background: "#ffdc00",
        content: '""',
        position: "absolute",
        top: "0",
        width: "50%",
        height: "100%",
        zIndex: "-1",
      },
    }}
  >
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        zIndex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></Box>
    <Box
      sx={{
        width: "23%",
        borderRight: "2px dashed rgb(0 0 0 / 13%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          transform: "rotate(-90deg)",
          whiteSpace: "nowrap",
          fontWeight: "700",
          marginLeft: "7px",
          fontSize: "10px",
        }}
      >
        Enjoy Your Gift
      </Box>
    </Box>
    <Box
      sx={{
        flexGrow: "1",
        textAlign: "center",
        flexDirection: "column",
        gap: "7px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: " #000",
          color: "gold",
          padding: "5px 10px",
          fontSize: "14px",
          lineHeight: " 1.2",
          whiteSpace: "nowrap",
          borderRadius: "46px",
        }}
      >
        <Box component={"span"} >
          <Box  component={"span"} >
            <bdi>
              <Box component={"span"} >
                $
              </Box>
              35.00
            </bdi>
          </Box>
        </Box>
        <Box component={"span"} >off</Box>
      </Box>
      <Box sx={{ fontSize: "13px" }}>coupon35</Box>
      <small> Never expire</small>
    </Box>
    <Box
      sx={{
        width: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:"radial-gradient(circle at 100% 50%, transparent 25px, #fff 26px)",

          "&:after": {
          backgroundImage:
            "radial-gradient(circle at 100% 50%, transparent 25px, #fff 26px)",
        },
      }}
    >
      <Box
        sx={{
          fontWeight: "400",
          transform: "rotate(-90deg)",
          whiteSpace: "nowrap",
          marginLeft: "-18px",
          fontSize: "12px",
          
        }}
      >
        Apply Coupon
      </Box>
    </Box>
  </Box>
  )
}

export default Coupon