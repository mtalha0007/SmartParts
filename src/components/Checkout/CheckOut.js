import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ContextApi } from "../../store/context";
import SelectAddressDialog from "../Dialog/SelectedAddressDialog"
import AddressForm from "../Dialog/AddressForm";

export default function CheckOut() {
  const { state, dispatch } = useContext(ContextApi);
  const [selectAddressDialog, setSelectAddressDialog] = useState(false);
  const [ selectedDeliveryAddress, setSelectedDeliveryAddress] = useState({});
  const [addressFormDialog, setAddressFormDialog] = useState(false);
  const [addressLoading, setAddressLoading] = useState(false);
  const [addressLists ,setAddressLists] = useState([])

  let amount = 0;
  let deliveryCharges = 5;
  function SubTotal() {
    for (let i = 0; i < state.cart_items.length; i++) {
      amount +=
        state.cart_items[i].discounted_price * state.cart_items[i].quantity;
    }
    return amount;
  }
  function TotalAmount() {
    let totalAmount = 0;
    totalAmount += amount + deliveryCharges;
    console.log("totalAmount");
    console.log("totalAmount");

    return totalAmount;
  }

  const placeOrder = () => {};

  const saveAddress =  (data) => {
    setAddressLoading(true);
     setAddressLists(data)
    console.log("saveAddress" , addressLists)
    
  };
  return (
    <Box sx={{ padding: "10px" }}>
      <Box
        sx={{
          border: "2px solid #eaebed",
          padding: "30px",
          borderRadius: "5px",
        }}
      >
        <Box component={"h5"}>Cart Totals</Box>
        <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}>
          <Box sx={{ fontSize: "15px", fontWeight: "500" }}>AMOUNT</Box>
          <Box sx={{ fontSize: "15px", fontWeight: "500", color: "#b20808" }}>
            ${SubTotal()}
          </Box>
        </Box>

        <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}>
          <Box sx={{ fontSize: "15px", fontWeight: "500" }}>
            DELIVERY CHARGES
          </Box>
          <Box sx={{ fontSize: "15px", fontWeight: "500", color: "#b20808" }}>
            ${5}
          </Box>
        </Box>
        <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}>
          <Box sx={{ fontSize: "15px", fontWeight: "500" }}>TOTAL</Box>
          <Box sx={{ fontSize: "15px", fontWeight: "500", color: "#b20808" }}>
            ${TotalAmount()}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          border: "2px solid #eaebed",
          padding: "30px",
          mt: 2,
          borderRadius: "5px",
        }}
      >
        <Box component={"h5"}>Delivery Address</Box>
        <TextField
          value={selectedDeliveryAddress?.address}
          inputProps={{ readOnly: true }}
          onClick={() => setSelectAddressDialog(true)}
          placeholder="Enter Address"
          variant="outlined"
          sx={{ mb: 1, padding: "12px 0px", width: "100%" }}
        />
        {selectAddressDialog && <SelectAddressDialog 
         open={selectAddressDialog}
         onClose={(data) => {
           setSelectAddressDialog(false);
           setSelectedDeliveryAddress(data);
         }}
         addressLists={addressLists || []}
         addNewAddress={() => {
           setSelectAddressDialog(false);
           setAddressFormDialog(true);
         }}
         selectedAddress={selectedDeliveryAddress}
        />}
        <AddressForm
        open={addressFormDialog}
        onClose={() => setAddressFormDialog(false)}
        save={(data) => saveAddress(data)}
      />
      </Box>
      <Box
        sx={{
          border: "2px solid #eaebed",
          padding: "30px",
          mt: 2,
          borderRadius: "5px",
        }}
      >
        <Box component={"h5"}>Select Payment Method </Box>
        <RadioGroup>
          <FormControlLabel
            value="credit_card"
            control={<Radio />}
            label="Debit-Credit Card"
          />
          <FormControlLabel
            value="paypal"
            control={<Radio />}
            label="Pay On Delivery"
          />
        </RadioGroup>
      </Box>
     
      <Box
        onClick={placeOrder}
        sx={{
          mt: 2,
          backgroundColor: "#df6a2d",
          color: "white",
          textAlign: "center",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Confirm Order
      </Box>
    </Box>
  );
}