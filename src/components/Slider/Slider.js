import Carousel from 'react-bootstrap/Carousel';
import {Images} from "../../assets/images/index"
import "./Slider.css"
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" style={{width:"100%"}} className="custom-dark-carousel" >
      <Carousel.Item>
        <img
        style={{height: "70vh" ,width:"100%", borderRadius: "5px"}}
          className="d-block "
          src={Images.verticalBanner1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: "70vh" ,width:"100%" ,borderRadius: "5px"}}
          className="d-block "
          src={Images.verticalBanner2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      
    </Carousel>
  );
}

export default DarkVariantExample;