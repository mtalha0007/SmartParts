import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  IconButton,
  TableRow,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled } from "@mui/system";
import moment from "moment";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

function Map({ lat, lng }) {
  console.log("lat===>" ,lat , "lng ===>" ,  lng)
  const googleMapKey = process.env.REACT_APP_MAP_API_KEY;


  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapKey,
    libraries: ["places"],
  });

  const containerStyle = {
    width: "100%",
    height: "200px",
    borderRadius: "10px",
    boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: false,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: lat, lng: lng }}
      zoom={14}
      options={options}
    >
      <MarkerF position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  ) : (
    ""
  );
}
export default function OrderDetailDialog({
    open,
    onClose,
  orderDetailById,
}) {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <>
      <Dialog
        maxWidth="md"
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            height: "auto",
            borderRadius: 2,
            py: { xs: 1.5, md: 3 },
            px: { xs: 1, md: 3 },
          },
        }}
      >
        <IconButton
          onClick={() => {
            onClose();
          }}
          sx={{ position: "absolute", right: 13, top: 13, color: "#df6a2d" }}
        >
          <Close />
        </IconButton>
        <DialogTitle
          sx={{ textAlign: "center", fontSize: "18px", fontWeight: 700 }}
        >
          {"Order Detail"}
        </DialogTitle>
        <DialogContent sx={{ px: { xs: 2, md: 3 } }}>
          <Box
            sx={{
              p: 1.5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              mb: 1,
              gap: "5px",
              backgroundColor: " #204c7d",
              position: "relative",
              height: "100px",
              mb: "40px",
            }}
          >
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "white" }}
              >
                Status:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                }}
              >
                {orderDetailById?.result?.status?.name}
              </Typography>
            </Box>
            <Box
              sx={{ width: "100%", height: "100%", position: "relative" }}
            ></Box>
            <Card
              sx={{
                // p: 1.5,
                display: "flex",
                justifyContent: "space-evenly",
                border: "1px solid rgb(232, 232, 232)",
                borderRadius: "12px",
                boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px`,
                mb: 1,
                position: "absolute",
                top: "70%",
                left: "4.5%",
                width: "90%",
              }}
            >
              <Box
                flex="50%"
                sx={{
                  borderRight: "1px solid rgb(232, 232, 232)",
                  textAlign: "center",
                  p: 1,
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Order Id
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#df6a2d" }}
                >
                  {orderDetailById?.result?.order_id}
                </Typography>
              </Box>
              <Box flex="50%" sx={{ textAlign: "center", p: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Date & Time
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#df6a2d" }}
                >
                  {moment(orderDetailById?.result?.createdAt).format(
                    "DD-MM-YYYY hh:mm A"
                  )}
                </Typography>
              </Box>
            </Card>
          </Box>
          {orderDetailById?.result?.productDetails?.length !== 0 && (
            <Box
              sx={{
                mt: 7,
                border: "2px solid #eaebed",
                padding: "30px",
                borderRadius: "5px",
              }}
            >
              <Box component={"h5"}>Products</Box>
              <Root
                sx={{
                  maxWidth: "100%",
                  width: "100%",
                  overflowX: { xs: "scroll", sm: "hidden" },
                }}
              >
                <table aria-label="custom pagination table">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>Image</th>
                      <th style={{ textAlign: "center" }}>Name</th>
                      <th style={{ textAlign: "center" }}>Quantity</th>
                      <th style={{ textAlign: "center" }}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetailById?.result?.productDetails.map((data, index) => (
                      <TableRow key={index} striped={index % 2 !== 0}>
                        <td
                          style={{
                            width: 160,
                            textAlign: "center",
                            padding: "15px",
                          }}
                        >
                          <img
                            style={{ width: "70px", height: "70px" }}
                            src={baseUrl + data.picture[0]}
                          />
                        </td>
                        <td
                          style={{
                            width: 160,
                            textAlign: "center",
                            padding: "15px",
                          }}
                        >
                          {data.name}
                        </td>
                        <td
                          style={{
                            width: 160,
                            textAlign: "center",
                            padding: "15px",
                          }}
                        >
                          {data.qty}
                        </td>
                        <td
                          style={{
                            width: 160,
                            textAlign: "center",
                            padding: "15px",
                          }}
                        >
                          {"$" + data.discounted_price}
                        </td>
                      </TableRow>
                    ))}
                  </tbody>
                </table>
              </Root>
            </Box>
          )}

          <Box
            sx={{
              mt: 4,
              border: "2px solid #eaebed",
              padding: "30px",
              borderRadius: "5px",
            }}
          >
            <Box component={"h5"}>Delivery Address</Box>
            <Map
              lat={orderDetailById?.result?.address?.latitude}
              lng={orderDetailById?.result?.address?.longitude}
            />
           <Box sx={{mt:1 ,fontWeight:"600"}}>{orderDetailById?.result?.address?.address }</Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              border: "2px solid #eaebed",
              padding: "30px",
              borderRadius: "5px",
            }}
          >
            <Box component={"h5"}>Total Bill</Box>
            <Box
              sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}
            >
              <Box sx={{ fontSize: "15px", fontWeight: "500" }}>AMOUNT</Box>
              <Box
                sx={{ fontSize: "15px", fontWeight: "500", color: "#df6a2d" }}
              >
                ${orderDetailById?.billing?.amount - 5}
              </Box>
            </Box>

            <Box
              sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}
            >
              <Box sx={{ fontSize: "15px", fontWeight: "500" }}>
                DELIVERY CHARGES
              </Box>
              <Box
                sx={{ fontSize: "15px", fontWeight: "500", color: "#df6a2d" }}
              >
                ${orderDetailById?.billing?.delivery_charges}
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}
            >
              <Box sx={{ fontSize: "15px", fontWeight: "500" }}>TOTAL</Box>
              <Box
                sx={{ fontSize: "15px", fontWeight: "500", color: "#df6a2d" }}
              >
                ${orderDetailById?.billing?.total_amount}
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
const Root = styled("div")(
  ({ theme }) => `
    table {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
      
    }
  
    td,
    th {

      border-bottom: 1px solid ${
        theme.palette.mode === "dark" ? "#333" : "#ddd"
      };
      text-align: left;
      padding: 8px;
    }
  
    th {
      background-color: ${theme.palette.mode === "dark" ? "#111" : "#f2f2f2"};
    }
    `
);
