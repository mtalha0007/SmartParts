import Carousel from 'react-bootstrap/Carousel';
import {Images} from "../../assets/images/index"
import "./Slider.css"
import { Box ,Button} from '@mui/material'

function DarkVariantExample1() {
  return (
    <Carousel data-bs-theme="dark" className="custom-dark-carousel" >
      <Carousel.Item>
        <Carousel.Caption style={{position:"absolute", top:"120px"}}>
          <Box sx={{color:"#df6a2d",borderRadius:"5px" ,width:"110px",textAlign:"center",background :"white" , padding:"6px"}}>From $320</Box>
          <Box sx={{fontWeight:"bold" , color:"white" ,textAlign:"left",marginTop:"10px", fontSize:"35px"}}>Interior Accessories</Box>
          <Box sx={{fontWeight:"600" , color:"white" , lineHeight:"30px",fontSize:"17px" ,marginTop:"15px", textAlign:"justify"}}>Headphones are a type of audio equipment that are worn on or over the ears to listen to music, podcasts, audiobooks, and other forms of audio content privately.</Box>
          <Box sx={{display:"flex", gap:"10px" , marginTop:"10px"}}>
            <Box>
              <Button   sx={{ width: '100%',color:"white",padding:"5px 18px" ,borderRadius:"5px",backgroundColor:"#df6a2d" ,textTransform:"capitalize"}}>
              Buy SL2300
            </Button>
            </Box>
            <Box>
              <Button   sx={{ width: '100%',color:"white",padding:"5px 18px" ,borderRadius:"5px",backgroundColor:"#072ac8" ,textTransform:"capitalize"}}>
              All Products
            </Button>
            </Box>
          </Box>
        </Carousel.Caption>
        <img 
        style={{height: "70vh",width:"110%" ,borderRadius: "5px"}}
          className="d-block "
          src={Images.verticalBanner4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption style={{position:"absolute", top:"120px"}}>
          <Box sx={{color:"white",borderRadius:"5px" ,width:"110px",textAlign:"center",background :"#072ac8" , padding:"6px"}}>From $320</Box>
          <Box sx={{fontWeight:"bold" , color:"white" ,textAlign:"left",marginTop:"10px", fontSize:"35px"}}>Trend Car Rims</Box>
          <Box sx={{fontWeight:"600" , color:"white" , lineHeight:"30px",fontSize:"17px" ,marginTop:"15px", textAlign:"justify"}}>Headphones are a type of audio equipment that are worn on or over the ears to listen to music, podcasts, audiobooks, and other forms of audio content privately.</Box>
          <Box sx={{display:"flex", gap:"10px" , marginTop:"10px"}}>
            <Box>
              <Button   sx={{ width: '100%',color:"white",padding:"5px 18px" ,borderRadius:"5px",backgroundColor:"#1e96fc" ,textTransform:"capitalize"}}>
              Buy SL2300
            </Button>
            </Box>
            <Box>
              <Button   sx={{ width: '100%',color:"white",padding:"5px 18px" ,borderRadius:"5px",backgroundColor:"#019267" ,textTransform:"capitalize"}}>
              All Products
            </Button>
            </Box>
          </Box>
        </Carousel.Caption>
        <img
        style={{height: "70vh" ,width:"110%", borderRadius: "5px"}}
          className="d-block "
          src={Images.verticalBanner3}
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default DarkVariantExample1;