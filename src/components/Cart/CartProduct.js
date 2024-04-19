
import React, { useContext, useState } from "react";
import { Box, Grid, Input, IconButton, Divider } from "@mui/material";
import { Images } from "../../assets/images";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ContextApi } from "../../store/context";
function CartProduct({alignItems, display, flexDirection, margin}) {
  const baseUrl = process.env.REACT_APP_BASE_URL
  const { state, dispatch } = useContext(ContextApi);
  console.log("state ==>> ", state.cart_items);

function DeleteProduct(_id) {
  dispatch({ type: 'DELETE_PRODUCT', payload: { _id } })
}
function IncrementQuantity(_id) {
  dispatch({ type: 'INCREMENT_PRODUCT', payload: { _id } })
}

function DecrementQuantity(_id) {
  dispatch({ type: 'DECREMENT_PRODUCT', payload: { _id } })
}

  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      alignItems={alignItems}
      sx={{
        flexDirection: flexDirection,
        paddingBottom: "15px",
        margin: "0 auto",
        width: "98%",
      }}
      spacing={2}
    >
      { state.cart_items?.length > 0 ? (
         state.cart_items?.map((elem, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <Box>
                  {/* Assuming Images.product2 is valid for each product; otherwise, consider using elem.image */}
                  <img
                    style={{ width: "70px" }}
                    src={baseUrl + elem.image}
                    alt="Product"
                  />
                </Box>

                <Box
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  <Box>{elem?.name}</Box>
                  <Box sx={{ color: "#b20808" }}>${elem?.discounted_price}</Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ marginTop: { xs: "15px", md: "0px" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: margin,
                }}
              >
                <Box display="flex">
                 
                  <Box
                    component="span"
                    sx={{
                      border: "1px solid #eaebed",
                      padding: "4px 6px",
                      cursor: "pointer",
                    }}
                    onClick={() => IncrementQuantity(elem._id)}
                  >
                    +
                  </Box>
                  <Input
                  readOnly
                  value={elem.quantity}
                    type="number"
                    disableUnderline
                    sx={{
                      width: "80px",
                      border: "1px solid #eaebed",
                      "& input": { textAlign: "center" },
                    }}
                 
                  />
                  <Box
                    component="span"
                    sx={{
                      border: "1px solid #eaebed",
                      padding: "4px 6px",
                      cursor: "pointer",
                    }}
                    onClick={() => DecrementQuantity(elem._id)}
                    
                  >
                    -
                  </Box>
                </Box>
                <Box
                  sx={{ fontSize: "14px", color: "#b20808", display: display }}
                >
                  ${elem?.discounted_price}
                </Box>
                <Box
                onClick={() => DeleteProduct(elem._id)}
                 
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
            <Divider sx={{ width: "100%", mt: 1 }} />
          </React.Fragment>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <IconButton>
            <LiaShoppingBagSolid
              style={{ width: "100px", height: "100px", color: "#eaebed" }}
            />
          </IconButton>

          <Box>Your cart currently is empty</Box>
          <Box
            onClick={handleNavigateHome}
            sx={{
              width: "140px",
              cursor: "pointer",
              margin: "9px auto",
              padding: "6px",
              textAlign: "center",
              color: "white",
              backgroundColor: "#df6a2d",
              borderRadius: "5px",
            }}
          >
            Return to Shop
          </Box>
        </Box>
      )}
      
    </Grid>
  );
}

export default CartProduct;
