import React, { Fragment, useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Radio,
  Typography,
} from "@mui/material";


function SelectAddressDialog({
  open,
  onClose,
  addressLists,
  selectedAddress,
  addNewAddress,
}) {
  console.log(
    "🚀 ~ file: SelectAddressDialog.js:10 ~ SelectAddressDialog ~ addressLists:",
    addressLists
  );



  // *For Delivery Address
  const [selectedDeliveryAddress, setSelectedDeliveryAddress] =
    useState(selectedAddress);

  useEffect(() => {
    setSelectedDeliveryAddress(selectedAddress);
  }, [selectedAddress]);

  return (
    <Dialog
     
      maxWidth="xs"
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          width: "80%",
          height: "auto",
          borderRadius: 2,
          py: { xs: 1.5, md: 3 },
          px: { xs: 1, md: 3 },
        },
      }}
    >
      <IconButton
        color="primary"
        onClick={() => onClose(selectedDeliveryAddress)}
        sx={{color:"#df6a2d" ,position: "absolute", right: 13, top: 13 }}
      >
        <Close />
      </IconButton>
      <DialogTitle
        sx={{ textAlign: "center", fontSize: "18px", fontWeight: 700 }}
      >
       Addresses
      </DialogTitle>
      <DialogContent
        sx={{
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {/* {addressLists.map((item, index) => ( */}
            <Fragment>
              <Box
                // key={index}
                // onClick={() =>
                //   setSelectedDeliveryAddress({
                //     id: item._id,
                //     address: item.address,
                //   })
                // }
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "start",
                  my: 2,
                  cursor: "pointer",
                }}
              >
                <Radio
                  name="address"
                //   value={item._id}
                //   checked={selectedDeliveryAddress?.id === item._id}
                />
                <Box>
                  <Typography component={"span"}>Home</Typography>
                  <Typography
                    component="p"
                    variant={"body1"}
                    className="text-truncate"
                    sx={{ fontWeight: 700 }}
                  >
                    Address
                  </Typography>
                  <Typography component="p" variant={"body1"}>
                    Area: 6734252
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Fragment>
          {/* ))} */}
        </Box>
        <Button sx={{backgroundColor:"#df6a2d" ,color:"white","&:hover":{backgroundColor:"#df6a2d",color:"white"        } }} onClick={() => addNewAddress()}>Add New Address</Button>
      </DialogContent>
    </Dialog>
  );
}

export default SelectAddressDialog;
