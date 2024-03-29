import { Box, Divider, Input } from "@mui/material";
import React from "react";
import { Images, Svgs } from "../../assets/images";
import ReactStars from "react-stars";
import { TbRotateClockwise } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import Drawerproducts from "../DrawerProducts/Drawerproducts";
import { FaWhatsapp,FaFacebookF ,FaTwitter,FaPinterestP,FaLinkedinIn,FaTelegramPlane ,FaViber    } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Coupon from "../Coupon/Coupon";
import ProductTab from "./ProductTab";
import Dropdown from "../DropDown/Dropdown"
import CategorySlider from "../CategorySlider/CategorySlider";
import CartProduct from "../Cart/CartProduct";
import {useNavigate } from "react-router-dom";

export default function ProductDetails() {
const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate("/")
  }
  return (
    <>
    <Box sx={{ display: "flex",justifyContent:"center", padding: "20px 10px" }}>
      <Box sx={{ display: "flex",gap:"10px",flexDirection:{xs:"column",md:"row"} ,width:{xs:"100%",md:"auto"} }}>
        <Box sx={{ width: {xs:"100%",md:"480px"} }}>
          <img
            style={{
              width: "100%",
              display: "block",
              border: " 1px solid #eaebed",
              borderRadius: "5px",
              background: "#eaebed",
              padding: "20px",
              position: "sticky",
               top: "120px", 
            }}
            src={Images.product2}
          />
          
        </Box>

        <Box>
        <Box sx={{ position: "sticky", top: "120px", padding: "0 10px" }}>
          <Box sx={{ display: "flex" ,mt:{xs:"15px",md:"0px"} }}>
           
            <Box
             onClick={handleNavigate}
              style={{
                textDecoration:"none",
                cursor: "pointer",
                padding: "0",
                maxWidth: "100%",
                fontSize: "10px",
                fontWeight: "400",
                textTransform: "uppercase",
                letterSpacing: ".3px",
              }}
            >
              Home
            </Box>
            
            <Box
              sx={{
                cursor: "pointer",
                display: "inline-block",
                padding: "0",
                maxWidth: "100%",
                fontSize: "10px",
                fontWeight: "400",
                textTransform: "uppercase",
                letterSpacing: ".3px",
                "&:before": {
                  content: "''",
                  display: "inline-block",
                  paddingRight: "0",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "#e1e2e3",
                  borderRadius: "50%",
                  marginBottom: "2px",
                  marginRight: "8px",
                  marginLeft: "8px",
                },
              }}
            >
              Products
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                display: "inline-block",
                padding: "0",
                maxWidth: "100%",
                fontSize: "10px",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: ".3px",
                "&:before": {
                  content: "''",
                  display: "inline-block",
                  paddingRight: "0",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "#e1e2e3",
                  borderRadius: "50%",
                  marginBottom: "2px",
                  marginRight: "8px",
                  marginLeft: "8px",
                },
              }}
            >
              Mercedes Transmission Filter
            </Box>
          </Box>
          <Box sx={{ mt: 2, fontSize: "24px", fontWeight: "500" }}>
            Mercedes Transmission Filter
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
              mt: 2,
              width: "150px",
              gap: "10px",
              padding: "2px 4px",
              border: "1px solid #ffdc00",
              backgroundColor: "#fffcda",
            }}
          >
            <ReactStars count={5} size={15} color1={"#ffd700"} />
            <Box
              sx={{ fontSize: "11px", fontWeight: "500" }}
              component={"span"}
            >
              {" "}
              3 REVIEWS
            </Box>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: "10px" }}>
            <Box
              sx={{
                fontSize: "10px",
                fontWeight: "600",
                backgroundColor: "#ed4b4b",
                color: "white",
                padding: "2px 9px",
                borderRadius: "5px",
              }}
            >
              Sale!
            </Box>
            <Box
              sx={{
                fontSize: "10px",
                fontWeight: "600",
                backgroundColor: "#ffe8e8",
                color: "#ed4b4b",
                padding: "2px 9px",
                borderRadius: "5px",
              }}
            >
              15%
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#ffe8e8",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            <Box dangerouslySetInnerHTML={{ __html: Svgs["bomb"] }}></Box>
            <Box>
              <Box
                sx={{ color: "#b20808", fontSize: "10px", fontWeight: "600" }}
              >
                FLASH SALE END IN:
              </Box>
              <Box sx={{ color: "#ed4b4b", fontSize: "20px" }}>07:11:44:43</Box>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box
              sx={{
                color: "#ed4b4b",
                fontSize: "21px",
                textDecoration: "line-through",
              }}
              component={"span"}
            >
              $25.99
            </Box>{" "}
            <Box sx={{ color: "#b20808", fontSize: "21px" }} component={"span"}>
              $21.99
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              border: "1px solid #eaebed",
              borderRadius: "5px",
              padding: "10px",
              width: "100%",
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
                  "& input": {
                    textAlign: "center",
                  },
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
            <Box
              sx={{
                mt: 2,
                backgroundColor: "#df6a2d",
                color: "white",
                textAlign: "center",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              Add to cart
            </Box>
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", flex: "1 0 auto", gap: "10px" }}>
                <Box
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "#1e96fc",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center ",
                  }}
                >
                  <FaRegHeart />
                </Box>
                <Box
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "#1e96fc",
                    color: "white",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center ",
                  }}
                >
                  <TbRotateClockwise />
                </Box>
              </Box>
              <Box
                sx={{
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center ",
                  padding: "0 50px",
                  backgroundColor: "#1e96fc",
                  color: "white",
                }}
              >
                Buy Now
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Drawerproducts
              display="flex"
              display1="none"
              width="200px"
              display2="block"
              padding="10px 0"
              borderTop="1px solid #e5e5e5"
            />
          </Box>
          <Box sx={{ padding: "10px 0", borderTop: "1px solid #e5e5e5" }}>
            <Box
              sx={{
                backgroundColor: "#0ecea6",
                fontWeight: "400",
                color: "white",
                textAlign: "center",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <Box component={"span"} sx={{ color: "white", mr: 2 }}>
                <FaWhatsapp />
              </Box>
              REQUEST INFORMATION
            </Box>
          </Box>
         <Box sx={{mt:2}}>
            <Coupon />
         </Box>
         <Box sx={{mt:2}}>
           <Box  sx={{fontSize:"12px",pt:1}}> DELIVERY & RETURN</Box>
           <Box sx={{fontSize:"12px",pt:1}}>SIZE GUIDE</Box>
           <Box sx={{fontSize:"12px",pt:1,color:"#DF6A2D"}}> 2 - DAY DELIVERY <Box component={"span"} sx={{fontWeight:"500"}}>MAR 29 APR 02</Box></Box>
         </Box>
         <Box  sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems:'center',
              backgroundColor: "#fffcf2",
              padding: "10px 15px",
              borderRadius: "5px",
              gap:"10px"
            }}
          >
            <Box sx={{color:"#c28e00",fontSize:"30px"}}><LiaShoppingBagSolid/></Box>
            <Box>
              <Box  sx={{width:"230px", color: "#2097fc", fontSize: "12px", fontWeight: "600" }} >
            91 people have this in their carts right now. It's running out!
              </Box>
            
            </Box>
          </Box>
          <Box sx={{mt:2}}>
           <Box  sx={{fontSize:"12px",padding:"1px"}}> <Box component={"span"} sx={{fontWeight:"600"}}>SKU: </Box> B5C6D7A8</Box>
           <Box sx={{fontSize:"12px",padding:"1px"}}><Box component={"span"} sx={{fontWeight:"600"}}>CATEGORIES: </Box>TRANSMISSION, TRANSMISSION FILTER</Box>
           <Box sx={{fontSize:"12px",padding:"1px"}}><Box component={"span"} sx={{fontWeight:"600"}}>TAG: </Box>TRANSMISSION</Box>
           <Box sx={{fontSize:"12px",padding:"1px"}}><Box component={"span"} sx={{fontWeight:"600"}}>BRANDS: </Box> DENSO, GATES</Box>
         </Box>
         <Box sx={{mt:2}}>
         <Box  sx={{display:"flex",gap:"10px",fontSize:"12px",padding:"1px"}}>
           <Box  sx={{fontWeight:"600"}}>SHARE: </Box> 
        <Box sx={{display:"flex",alignItems:"center",gap:"3px"}}>
        <Box sx={{backgroundColor:"#3b5998",cursor:"pointer" ,color:"white",borderRadius:"50%",width: "25px",height: "25px",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <FaFacebookF/>
          </Box> 
        <Box sx={{backgroundColor:"#1da1f2",cursor:"pointer" ,color:"white",borderRadius:"50%",width: "25px",height: "25px",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <FaTwitter />
          </Box> 
        <Box sx={{backgroundColor:"#e60023",cursor:"pointer" ,color:"white",borderRadius:"50%",width: "25px",height: "25px",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <FaPinterestP />
          </Box> 
        <Box sx={{backgroundColor:"#0077b5",cursor:"pointer" ,color:"white",borderRadius:"50%",width: "25px",height: "25px",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <FaLinkedinIn   />
          </Box> 
        <Box sx={{backgroundColor:"#25d366",cursor:"pointer" ,color:"white",borderRadius:"50%",width: "25px",height: "25px",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <FaWhatsapp   />
          </Box> 
        <Box sx={{backgroundColor:"#0088cc",cursor:"pointer" ,color:"white",borderRadius:"50%",width: "25px",height: "25px",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <FaTelegramPlane    />
          </Box> 
        <Box sx={{backgroundColor:"#7360f2",cursor:"pointer" ,color:"white",borderRadius:"50%",width: "25px",height: "25px",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <FaViber     />
          </Box> 
       
        
        </Box>
         </Box>
         </Box>
         <Box  sx={{
              mt: 2,
              backgroundColor: "#f7f7f8",
              padding: "10px 15px",
              borderRadius: "5px",
              border:'1px solid #eaebed'

            }}
          >
            <Box sx={{color:"#c28e00",fontSize:"30px",display: "flex", justifyContent: "center",marginBottom: "10px"}}>
              <img src={Images.payment} />
              </Box>
            <Box>
              <Box  sx={{textAlign:"center", color: "#4e4e4e", fontSize: "14px", fontWeight: "600" }} >
              GUARANTEED SAFE & SECURE CHECKOUT
              </Box>
            
            </Box>
          </Box>
        </Box>

        </Box>
        <Box sx={{display:{xs:"none",md:"flex"}}}>
           <Box sx={{border:"1px solid #eaebed"}}>
           <Box sx={{ padding: "30px 10px " ,borderBottom:"1px solid #eaebed", display: "flex",justifyContent:"center"  }}>
          <input
            style={{
              border: "1px solid #eaebed",
              padding: "10px 6px",
              pr: 0,
              backgroundColor:"white",
            
            }}
            placeholder="Search Products"
          />
          <Box
            component={"span"}
            sx={{
              backgroundColor: "#df6a2d",
              color: "white",    
              fontWeight: "bold",
              fontSize: "12px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              padding: "9px",
              
            }}
          >
            SEARCH
          </Box>
        </Box>
           <Box sx={{fontSize:"18px", padding: "30px 10px",fontWeight:"600" ,borderBottom:"1px solid #eaebed"  }}>
          Products Categories
          
          <Box sx={{mt:2,border:"2px solid #eaebed ",padding:"10px"}}>
          <Dropdown
                  fontSize={"13px"}
                  title={"Select a category "}
                  keyValue1={"English"}
                  keyValue2={"Hindhi"}
                  keyValue3={"GERMANY"}
                />
          </Box>
        </Box>
          <Box sx={{mt:2,borderBottom:"1px solid #eaebed ",padding:"10px"}}>
          <Box
                sx={{ fontSize: "18px", fontWeight: "600", padding: "10px" }}
              >
                Featured Products
              </Box>
            <Drawerproducts/>
          </Box>
          <Box sx={{width:"10px" ,padding:'10px'}}>
            <Box  component={"h6"}>Cart</Box>
                <CartProduct alignItems="none" flexDirection="column" margin="10px 50px" display="none" />                                            
          </Box>
       
           </Box>
    
          
        </Box>
      </Box>
    </Box>
      <Box sx={{border:"1px solid #eaebed",margin:'10px',borderRadius:"5px"}}>
         <ProductTab/> 
      </Box>
      <Box sx={{mb:4 ,p:1  }}  component={"h4"}>You May Also Like...</Box>
      <Box
        sx={{ width: { md: "90%", sm: "85%", xs: "85%" }, margin: "30px auto" }}
      >
        <CategorySlider imgWidth="200px" slidesToShow={4} backgroundColor="#df6a2d"  color="white" />
      </Box>
      </>
  );
}
