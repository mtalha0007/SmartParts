import { Box, Divider, Grid, Input } from "@mui/material";
import React from "react";
import { Svgs, Images } from "../../assets/images";
import { RiDeleteBin6Line } from "react-icons/ri";
import CategorySlider from "../CategorySlider/CategorySlider"
import ProductReview from "../ProductReview/ProductReview"
export default function Cart() {
  return (
    <>
      <Grid
       container
        sx={{ paddingLeft: "0px", margin: "40px auto", width: "90%" }}
        gap="10px"
        
      >
        <Grid xs={12} md={8}>
          <Box
            sx={{
              border: "1px solid #df6a2d",
              backgroundColor: "#fff3ed",
              borderRadius: "10px 10px 0 0",
              padding: "20px 20px 20px",
            }}
          >
            <Box
              sx={{
                color: "#df6a2d",
                fontWeight: "400",
                mb: 2,
                fontSize: "15px",
              }}
            >
              Buy $492.01 more to enjoy FREE Shipping
            </Box>
            <Box>
              <Box
                sx={{ position: "relative", height: "6px", margin: "8px 5px" }}
              >
                <Box
                  sx={{
                    backgroundColor: "#f6cdb7",
                    borderRadius: "20px",
                    position: "relative",
                    height: "100%",
                    maxWidth: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      transform: "translate(50%, -50%)",
                      background: "#ffffff",
                      border: "1px solid #df6a2d",
                      borderRadius: "50%",
                      fontSize: "12px",
                      width: "26px",
                      height: "26px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      zIndex: 1,
                    }}
                  >
                    <Box
                      dangerouslySetInnerHTML={{ __html: Svgs["bus"] }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #df6a2d",
              padding: "15px 0 20px",
              borderRadius: "0 0 5px 5px",
            }}
          >
            <Grid
              container
              alignItems="center"
              sx={{
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
                    <img style={{ width: "70px" }} src={Images.product1} />
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
                  <Box sx={{ fontSize: "14px", color: "#b20808" }}>$7.99</Box>
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
            <Divider />

            <Box
              sx={{
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
                  Apply Coupon
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
          </Box>
        </Grid>

        <Grid xs={12} md={3.8}>
         <Box sx={{border:"2px solid #eaebed" ,padding:"30px",borderRadius:"5px"}}>
        <Box component={"h5"}>
            Cart Totals
        </Box>
        <Box sx={{display:"flex",mt:2 ,justifyContent:"space-between"}}>
            <Box sx={{fontSize:'13px',fontWeight:"500"}}>SUBTOTAL</Box>
            <Box sx={{fontSize:'13px',fontWeight:"500",color:"#b20808"}}>$7.99</Box>
        </Box>
        <Box sx={{backgroundColor:"#fff3ed",mt:2,padding:'10px'}}>
        <Box sx={{fontSize:"14px" ,color:"#df6a2d"}}>Shipping</Box>
        <Box sx={{fontSize:"14px" ,color:"#df6a2d"}}>Enter your address to view shipping options.</Box>
        <Box sx={{fontSize:"13px" }}>Calculate Shipping</Box>
        </Box>
        <Box sx={{display:"flex",mt:2 ,justifyContent:"space-between"}}>
            <Box sx={{fontSize:'13px',fontWeight:"500"}}>TOTAL</Box>
            <Box sx={{fontSize:'13px',fontWeight:"500",color:"#b20808"}}>$7.99</Box>
        </Box>
        <Box sx={{mt:2,backgroundColor:"#df6a2d",color:"white",textAlign:"center" ,borderRadius:"5px",padding:"10px"}}>
            Proceed to checkout
        </Box>
         </Box>
        </Grid>
      </Grid>

      <Box sx={{mb:4 ,p:1  }}  component={"h4"}>You May Be Interested In...</Box>
      <Box
        sx={{ width: { md: "90%", sm: "85%", xs: "85%" }, margin: "30px auto" }}
      >
        <CategorySlider imgWidth="200px" slidesToShow={4} backgroundColor="#df6a2d"  color="white" />
      </Box>

      <Box>
        <ProductReview/>
      </Box>
    </>
  );
}
