import React, { useContext, useEffect, useState } from "react";
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
import addressPostServices from "../../services/adressServices";
import PlaceOrderServices from "../../services/placeOrderServices";
import Toastify from 'toastify-js'

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
      amount += state.cart_items[i].discounted_price * state.cart_items[i].quantity;
    }
    return amount;
    }
    
    function TotalAmount() {
    let totalAmount = 0;
    totalAmount += amount + deliveryCharges;
     return totalAmount;
  }

  const submitForm = async (formData, totalAmount) => { 
    const products = [];
    //create obj for products and push to products array
    state.cart_items.forEach((data) => {
      let productObj = {
        product_id: data?.productId,
        qty: data?.quantity,
        product_price: data?.discounted_price > 0 ? data?.discounted_price : data?.price,
      };
      products.push(productObj);
    });

    let obj = {
      products: products,
      total_amount: totalAmount,
      address_id: selectedDeliveryAddress?.id,
      delivery_charges: deliveryCharges,
    }
    ///add object to api
    try{

      const response = await PlaceOrderServices.postOrder(obj);
    console.log(response)
    Toastify({
      text:response?.message,
      duration: 2000,
      gravity: "top", 
      position: "right", 
      stopOnFocus: true, 
      style: {
        background : "green"
       
      },
     
    }).showToast();
    }catch(error){
      Toastify({
        text:"Something went wrong",
        duration: 2000,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background :"red"
         
        },
       
      }).showToast();
    }
    };


const saveAddress = async (data) => {
  try{
  console.log(data)
  const responseCode  = await addressPostServices.createAddress(data);
  console.log(responseCode)
  getAddressLists() 
  console.log("saveAddress", addressLists);
  }catch(error){
    console.log("catch error====>" ,error)
  }
};

const getAddressLists = async () => {
  try {
    const { responseCode, data } = await addressPostServices.getAddress();
    if (responseCode === 200) {
      setAddressLists(data.result);
      setSelectedDeliveryAddress({
        id: data?.result[0]?._id,
        address: data?.result[0]?.address,
      });
    }
  } catch (error) {
    console.log(error);
    
  }
};
useEffect(()=>{
getAddressLists();
},[1000 ])
 
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
          defaultValue ={selectedDeliveryAddress?.address}
          inputProps={{ readOnly: true }}
          autoFocus={true}
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
        <SelectAddressDialog 
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
        />
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