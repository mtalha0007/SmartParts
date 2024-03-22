import React from 'react';
import { Box, Grid, Typography, List } from '@mui/material';
import {Images , Svgs } from '../../assets/images';

function Footer() {
    const FooterData = [
        {
            title1: "About Fitment",
            links1: ["Fitment Inside", "About Us", "Company", "Careers", "Brands"],
            title2: "Smart Phones",
            links2: ["Order Tracking", "Terms & Conditions", "Privacy Policy", "Tutorials", "FAQ"],
        },
        {
            title1: "Quick Links",
            links1: ["Fitment Inside", "About Us", "Company", "Careers", "Brands"],
            title2: "Smart TV",
            links2: ["Order Tracking", "Terms & Conditions", "Privacy Policy", "Tutorials", "FAQ"],
        },
        {
            title1: "Policies",
            links1: ["Fitment Inside", "About Us", "Company", "Careers", "Brands"],
            title2: "Accessories",
            links2: ["Order Tracking", "Terms & Conditions", "Privacy Policy", "Tutorials", "FAQ"],
        },
        {
            title1: "Brands",
            links1: ["Samsung", "Apple", "LG", "Bosch", "Beko"],
            title2: "Accessories",
            links2: ["Iphone 14 Pro Max", "Iphone 13 Pro Max", "Samsung Note 21 Ultra", "Xiaomi Vacuum" ,"Cleaner"],
        },
    ];

    return (
        <>
        <Box sx={{ background: "#f7f7f8" }}>
            <Grid container sx={{ color: "black",p:{sm:"260px 15px 30px 15px" ,xs:"310px 15px 30px 15px"} }}>
                <Grid item md={8} sm={12}>
                    <Box sx={{display:{md:"flex",sm:"block"}}}>

                    
                    {FooterData.map((item, index) => (
                        <Box key={index} sx={{ display: "flex",padding:"0 15px" ,flexDirection: "column", mr: { md: "30px" } }}>
                            <Typography  sx={{ mt: 2, mb: 1 ,fontWeight:"600",color:"#161616" ,fontSIze:"18px"}}>{item.title1}</Typography>
                            <List>
                                {item.links1.map((link, idx) => (
                                    <Box   key={idx}>
                                        <Box sx={{fontSize:"12px",padding:"2px 0px"}}  color="#7a7a7a"> 
                                        {link}
                                        </Box>
                                        </Box>
                                    
                                ))}
                            </List>
                            <Typography  sx={{ mt: 2, mb: 1 ,fontWeight:"600",color:"#161616" ,fontSIze:"18px"}}>{item.title2}</Typography>
                            <List>
                                {item.links2.map((link, idx) => (
                                    <Box   key={idx}>
                                    <Box sx={{fontSize:"12px",padding:"2px 0px"}}  color="#7a7a7a"> 
                                    {link}
                                    </Box>
                                    </Box>
                                    
                                ))}
                            </List>
                        </Box>
                    ))}
                    </Box>
                </Grid>
                <Grid item md={4} sm={12}>
                    <Box component={"h4"}>Don't compromise on quality!</Box>
                    <Box component={"p"} sx={{mt:"15px",color:"#7a7a7a" ,fontSize:"13px"}}>The point of using Lorem Ipsum is that it has a more-or-less normal
                     distribution of letters. On the other hand, we denounce with righteous indignation ...
                     </Box>
                     <Box sx={{display:"flex",gap:"10px",alignItems:"center"}}>
                           <Box sx={{backgroundColor:"#3b5998",padding:"2px 5px" ,borderRadius:"50%"}}>
                            <Box dangerouslySetInnerHTML={{__html:Svgs["facebook"]}}  >
                                </Box> 
                                </Box> 
                           <Box sx={{backgroundColor:"#1da1f2",padding:"2px 5px" ,borderRadius:"50%"}}> 
                           <Box dangerouslySetInnerHTML={{__html:Svgs["twitter"]}}  ></Box>
                           </Box>   
                           <Box sx={{backgroundColor:"#cd201f",padding:"2px 5px" ,borderRadius:"50%"}}>
                             <Box dangerouslySetInnerHTML={{__html:Svgs["youtube"]}}  ></Box>
                               </Box> 
                           <Box sx={{backgroundColor:"#2ca5e0",padding:"2px 5px" ,borderRadius:"50%"}}>
                            <Box dangerouslySetInnerHTML={{__html:Svgs["telegram"]}}  ></Box> 
                             </Box> 
                           <Box sx={{backgroundColor:"#35465c",padding:"2px 5px" ,borderRadius:"50%"}}>
                            <Box dangerouslySetInnerHTML={{__html:Svgs["tumblr"]}}  ></Box> 
                            </Box>  
                           <Box sx={{backgroundColor:"#21759b",padding:"2px 5px" ,borderRadius:"50%"}}>
                            <Box dangerouslySetInnerHTML={{__html:Svgs["wikipedia"]}}  ></Box> 
                             </Box> 
                           <Box sx={{backgroundColor:"#0077b5",padding:"2px 5px" ,borderRadius:"50%"}}>
                            <Box dangerouslySetInnerHTML={{__html:Svgs["linkedin"]}}  ></Box>
                              </Box> 
                    
                     </Box>
                     <Box sx={{display:"flex",gap:"10px",alignItems:"center",mt:"15px"}}>
                          <Box  dangerouslySetInnerHTML={{__html:Svgs["shop"]}}  ></Box>
                          <Box >
                            <Box sx={{fontSize:"18px" ,fontWeight:"500"}}> Need help? Call now!</Box>
                            <Box sx={{fontSize:"23px",fontWeight:"500",color:"#df6a2d"}}>(500) 8001 8588, (500) 544 6550</Box>
                          </Box>
                    
                     </Box>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{display:"flex",alignItems:"center",flexDirection:{sm:"row" ,xs:"column"},justifyContent:{sm:"space-between" ,xs:"center" },gap:"10px" ,p:"10px"}}>
            <Box sx={{color:"#161616" ,fontSize:"12px"}}><Box component={"span"} sx={{fontWeight:"600"}}>All right reserved.</Box> Porta lorem mollis aliquam ut porttitor leo.</Box>
            <Box><img src={Images.payment} /></Box>
        </Box>
        </>
    );
}

export default Footer;
