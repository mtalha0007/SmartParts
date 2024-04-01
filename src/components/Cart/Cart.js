import { Box, Grid } from "@mui/material";
import React,{useState} from "react";
import { Svgs} from "../../assets/images";
import CategorySlider from "../CategorySlider/CategorySlider"
import ProductReview from "../ProductReview/ProductReview"
import CartProduct from "./CartProduct";
export default function Cart({data}) {
  // for cartData  
  const [cartData, setCartData] = useState([]);
  const [inputData, setInputData] = useState(1)
  let totalPrice = 0; 
  let myCartData = cartData.map(elem => {
    totalPrice += elem.discounted_price;
    return elem; 
  });

  const addToCart = (selectedProduct) => {
    setCartData(currentCartData => [...currentCartData, selectedProduct]);
    console.log('Adding to cart:', selectedProduct);
   
    
  };
  
  const handleDeleteProduct = (productId) => {
    setCartData(currentCartData => 
      currentCartData.filter(product => product.category_id._id !== productId)
      );
      
   
  };
  
  const handleIncreament=()=>{
    setInputData(inputData + 1)
   
  }
  const handleDecreament=()=>{
    setInputData(inputData - 1)

  }
  const handleUptate=()=>{
      totalPrice *=inputData
      return totalPrice 
      console.log(totalPrice)

  }
  return (
    <>
      <Grid
       container
        sx={{ paddingLeft: "0px", margin: "40px auto", width: "90%" }}
        gap="10px"
        
      >
        <Grid item xs={12} md={8}>
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
            <CartProduct cartData={cartData} onDelete={handleDeleteProduct} onUpdate={handleUptate} onAdd={handleIncreament} onRemove ={handleDecreament} inputData={inputData} alignItems="center" />
            
          </Box>
        </Grid>

        <Grid item xs={12} md={3.8}>
         <Box sx={{border:"2px solid #eaebed" ,padding:"30px",borderRadius:"5px"}}>
        <Box component={"h5"}>
            Cart Totals
        </Box>
        <Box sx={{display:"flex",mt:2 ,justifyContent:"space-between"}}>
            <Box sx={{fontSize:'13px',fontWeight:"500"}}>SUBTOTAL</Box>
            <Box sx={{fontSize:'13px',fontWeight:"500",color:"#b20808"}}>${totalPrice}</Box>
        </Box>
        <Box sx={{backgroundColor:"#fff3ed",mt:2,padding:'10px'}}>
        <Box sx={{fontSize:"14px" ,color:"#df6a2d"}}>Shipping</Box>
        <Box sx={{fontSize:"14px" ,color:"#df6a2d"}}>Enter your address to view shipping options.</Box>
        <Box sx={{fontSize:"13px" }}>Calculate Shipping</Box>
        </Box>
        <Box sx={{display:"flex",mt:2 ,justifyContent:"space-between"}}>
            <Box sx={{fontSize:'13px',fontWeight:"500"}}>TOTAL</Box>
            <Box sx={{fontSize:'13px',fontWeight:"500",color:"#b20808"}}>${totalPrice}</Box>
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
        <CategorySlider data={data} addToCart={addToCart} imgWidth="200px" slidesToShow={4} backgroundColor="#df6a2d"  color="white" />
      </Box>

      <Box>
        <ProductReview/>
      </Box>
    </>
  );
}
