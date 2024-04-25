import React, { useState, useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Box, Grid } from "@mui/material";
import ReactStars from "react-stars";
import { ContextApi } from "../../store/context";
import productServices from "../../services/productServices";

export default function AllProducts() {
  const { state, dispatch } = useContext(ContextApi);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [allProductsDetail, setAllProductsDetail] = useState([]);
  const [limit, setLimit] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  function AddToCart(elem) {
    let cartData = {
      _id: Math.floor(Math.random() * 1000000),
      productId: elem._id,
      name: elem.name,
      price: elem.price,
      discounted_price: elem.discounted_price,
      image: elem.picture[0],
      quantity: 1,
    };
    dispatch({ type: "ADD_TO_CART", payload: cartData });
    console.log("elem =>> ", elem);
  }

  const handleLoadMore = async () => {
    const newLimit = limit + count;
    const params = {
      limit: newLimit,
      page: page,
    };

    try {
      const productData = await productServices.getProductData(params);
      setCount(productData?.data?.count);
      setAllProductsDetail(productData?.data?.result);
      setLimit(limit);
      setPage(page);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleLoadMore();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {allProductsDetail?.length > 0 &&
          allProductsDetail?.map((elem, index) => (
            <Grid item lg={3} md={3} sm={4} xs={12} key={index}>
              <Card
                style={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "6px",
                    left: "6px",
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
                    position: "absolute",
                    left: "6px",
                    top: "33px",
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
                <Card.Img
                  style={{ width: "100px", margin: "0 auto", height: "150px" }}
                  variant="top"
                  // src={Images.product2}
                  src={baseUrl + elem.picture[0]}
                />
                <Card.Body>
                  <Card.Title>
                    <Box
                      sx={{
                        padding: "10px",
                        width: "100%",
                        borderTop: "1px solid #eaebed ",
                      }}
                    >
                      <Box>
                        <Box sx={{ fontSize: "12px" }}>{elem.name}</Box>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "5px",
                            marginTop: "10px",
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: "14px",
                              color: "#b20808",
                              textDecoration: "line-through",
                              fontWeight: "600",
                            }}
                          >
                            ${elem.price}
                          </Box>
                          <Box
                            sx={{
                              fontSize: "14px",
                              color: "#b20808",
                              fontWeight: "600",
                            }}
                          >
                            ${elem.discounted_price}
                          </Box>
                        </Box>
                        <Box sx={{ marginTop: "10px" }}>
                          <ReactStars count={5} size={15} color1={"#ffd700"} />
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            paddingTop: "7px",
                            lineHeight: "18px",
                          }}
                        >
                          <Box>
                            <Box
                              component={"span"}
                              sx={{ color: "#5db99e", fontSize: "12px" }}
                            >
                              ✓
                            </Box>{" "}
                            5 Years Guarantee
                          </Box>
                          <Box>
                            <Box
                              component={"span"}
                              sx={{ color: "#5db99e", fontSize: "12px" }}
                            >
                              ✓
                            </Box>{" "}
                            Free Returns
                          </Box>
                          <Box>
                            <Box
                              component={"span"}
                              sx={{ color: "#5db99e", fontSize: "12px" }}
                            >
                              ✓
                            </Box>{" "}
                            Installment Options
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Card.Title>
                  <Button
                    onClick={() => AddToCart(elem)}
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "rgb(223 106 45)",
                      color: "white",
                      fontSize: "13px",
                    }}
                  >
                    {" "}
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Grid>
          ))}
      </Grid>
      { allProductsDetail?.length != count ? (
      <Box
        sx={{ display: "flex",
         justifyContent: "center",
        cursor: "pointer" ,
        border: "none",
        margin:"15px auto",
        backgroundColor: "rgb(223 106 45)",
        color: "white",
        fontSize: "13px",
        padding:"9px",
        width:"50%",
        borderRadius:"5px"
      }}
        onClick={handleLoadMore}
      >
        Load More
      </Box>
      ) :""
      }
    </>
  );
}
