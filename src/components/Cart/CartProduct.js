import React from 'react';
import { Box, Grid, Input ,IconButton,Divider} from '@mui/material';
import { Images } from '../../assets/images';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LiaShoppingBagSolid } from "react-icons/lia";
function CartProduct({ alignItems, display, flexDirection, margin, cartData ,onDelete }) {
  
  

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
      {cartData?.length > 0 ? cartData?.map((elem, index) => (
        
        <React.Fragment key={index}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Box>
                {/* Assuming Images.product2 is valid for each product; otherwise, consider using elem.image */}
                <img style={{ width: "70px" }} src={Images.product2} alt="Product" />
              </Box>

              <Box
                sx={{
                  textTransform: "uppercase",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                <Box>{elem?.category_id?.name}</Box>
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
                {/* Quantity Increment/Decrement and Display */}
                <Box
                  component="span"
                  sx={{
                    border: "1px solid #eaebed",
                    padding: "4px 6px",
                    cursor: "pointer",
                  }}
                >
                  +
                </Box>
                <Input
                  value="1" // Placeholder value; consider managing quantity in state
                  disableUnderline
                  sx={{
                    width: "80px",
                    border: "1px solid #eaebed",
                    '& input': { textAlign: "center" },
                  }}
                />
                <Box
                  component="span"
                  sx={{
                    border: "1px solid #eaebed",
                    padding: "4px 6px",
                    cursor: "pointer",
                  }}
                >
                  -
                </Box>
              </Box>
              <Box sx={{ fontSize: "14px", color: "#b20808", display: display }}>
              ${elem?.discounted_price}
              </Box>
              <Box
              onClick={() => onDelete(elem?.category_id?._id)}
                sx={{
                  fontSize: "17px",
                  color: "#ababab",
                  cursor: "pointer",
                }}
              >
                <RiDeleteBin6Line  />
              </Box>
            </Box>
          </Grid>
         <Divider sx={{width:"100%" ,mt:1}}/>

            
        </React.Fragment>
      )):<Box sx={{display:"flex" ,justifyContent:"center",flexDirection:"column" ,margin:"0 auto"}}>
    
          <IconButton >
          <LiaShoppingBagSolid style={{width:"100px" ,height:"100px",color:'#eaebed'}}/>
          </IconButton>
      
        <Box>
        Your cart currently is empty
        </Box>
        <Box sx={{width:"140px",margin:"9px auto",padding:"6px",textAlign:"center",color:"white",backgroundColor:"#df6a2d" ,borderRadius:"5px"}}>
        Return to Shop
        </Box>
        </Box>}
        {!cartData.length == 0 && 
        <>
        <Box
              sx={{
                width:"100%",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  padding: "10px",
                  gap: "15px",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Input
                  disableUnderline
                  placeholder={"Coupon Code"}
                  sx={{
                    fontSize: "13px",
                    padding: "5px",
                    textAlign: "center",
                    width: "100%",
                    // width: {sx:"100%",md:"170px"},
                    border: "2px solid #eaebed",
                  }}
                />
                <Box
                  sx={{
                    backgroundColor: "#df6a2d",
                    color: "white",
                    fontSize: "13px",
                    padding: "9px 0",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Apply Coupons
                </Box>
              </Box>
              <Box sx={{ padding: "10px 10px" }}>
                <Box
                  sx={{
                    padding: "10px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "13px",
                    textAlign: "center",
                    backgroundColor: "#1e96fc",
                    color: "white",
                  }}
                >
                  Update Cart
                </Box>
              </Box>
            </Box>
            </>
}
    </Grid>
  );
}

export default CartProduct;
