import React from "react";
import {
  Box,
  Checkbox,
  Button,
  TextField,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

function LoginPage() {
  return (
    <Grid container sx={{ margin: "0 auto" }} className="container" spacing={2}>
      <Grid item xs={12} md={6}>
        <Box sx={{ width: "100%" }}>
          <Box component={"h3"} sx={{ textAlign: "left" }}>
            Login
          </Box>
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
            Username or email address *
          </Box>
          <TextField
            variant="outlined"
            sx={{ mb: 1, padding: "12px 0px", width: "100%" }}
          />
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
            Password *
          </Box>
          <TextField
            variant="outlined"
            type="password"
            sx={{ padding: "12px 0px", width: "100%" }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              sx={{ mr: 0, mb: 1 }}
            />
            <Box
              sx={{
                mb: 1,
                color: "#4e4e4e",
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              Remember Me
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              backgroundColor: "#df6a2d",
            }}
          >
            Login
          </Button>

          <Box
            sx={{
              mt: 3,
              fontSize: "13px",
              color: "#b20808",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Lost your password?
          </Box>
          <Box sx={{mt:2}} className="col-5">
            <Box
              sx={{
                backgroundColor: "#4b70ab",
                marginBottom: "10px",
                marginRight: "2px",
                color: "white",
                height: "50px",
                lineHeight: "46px",
                position: "relative",
                textAlign: "left",
                borderRadius:"5px",
                fontSize:"13px"
              }}
            >
              <FaFacebookF style={{margin:"0px 10px 0px 10px", color: "white" }} />
              Login With Facebook
            </Box>
            <Box
              sx={{
                backgroundColor: "#dd4b39",
                marginBottom: "10px",
                marginRight: "2px",
                color: "white",
                height: "50px",
                lineHeight: "46px",
                position: "relative",
                textAlign: "left",
                borderRadius:"5px",
                fontSize:"13px"


              }}
            >
              <FaGoogle style={{margin:"0px 10px 0px 10px", color: "white" }} />
              Login With Google +
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ width: "100%" }}>
          <Box component={"h3"} sx={{ textAlign: "left" }}>
            Register
          </Box>
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
            Email Address *
          </Box>
          <TextField
            variant="outlined"
            sx={{ mb: 1, padding: "12px 0px", width: "100%" }}
          />
          <Box
            sx={{
              mb: 3,
              color: "#4e4e4e",
              fontWeight: "400",
              fontSize: "13px",
            }}
          >
            A link to set a new password will be sent to your email address.
          </Box>
          <Box
            sx={{
              mb: 3,
              color: "#4e4e4e",
              fontWeight: "400",
              fontSize: "13px",
            }}
          >
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </Box>
          <Box sx={{ mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                backgroundColor: "#df6a2d",
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
