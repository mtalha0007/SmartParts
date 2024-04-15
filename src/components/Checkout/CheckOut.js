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
import { useForm } from "react-hook-form";

export default function CheckOut() {
   // *For Context to get total amount
  const { state, dispatch } = useContext(ContextApi);
   // *For selectAddressDialog
  const [selectAddressDialog, setSelectAddressDialog] = useState(false);
  // *For selectedDeliveryAddress value 
  const [ selectedDeliveryAddress, setSelectedDeliveryAddress] = useState({});
  // *For addressFormDialog  
  const [addressFormDialog, setAddressFormDialog] = useState(false);
  // *For addressLists value 
  const [addressLists ,setAddressLists] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
     return totalAmount;
  }

  const submitForm = (formData, totalAmount) => {
    console.log("Form Data:", { formData, totalAmount });
    
};


const saveAddress = (data) => {
  setAddressLists(prevAddressLists => [...prevAddressLists, data]);
  console.log("saveAddress", addressLists);
};

  return (
    <Box sx={{ padding: "10px" }} component="form" onSubmit={handleSubmit((data) => submitForm(data, TotalAmount()))}>
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
          {...register("location", {
            required: "Location is required",
          })}
          helperText={errors.location?.message}
          error={!!errors.location}
      
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
            {...register("paymentMethod", {
              required: "Payment method is required",
            })}
            error={errors?.paymentMethod?.message}
            
          />
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label="Pay On Delivery"
            {...register("paymentMethod", {
              required: "Payment method is required",
            })}
            error={errors?.paymentMethod?.message}
           
          />
        </RadioGroup>
        {errors.paymentMethod && (
          <span style={{ color: '#d32f2f' ,fontSize:"0.8rem",fontWeight:"400",marginTop:"-7px",marginLeft:"14px" }}>{errors.paymentMethod.message}</span>
        )}
      </Box>
     
      <Button
     
      type={"submit"}
        sx={{
          mt: 2,
          backgroundColor: "#df6a2d",
          color: "white",
          textAlign: "center",
          borderRadius: "5px",
          padding: "10px",
          width: "100%",
          cursor: "pointer",
          '&:hover':{
            backgroundColor: "#df6a2d",
          color: "white",
          }
        }}
      >
        Confirm Order
    </Button>
    </Box>
  );
}