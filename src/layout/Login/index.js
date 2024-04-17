import React, { useContext, useEffect, useState } from "react";
import {Box,Button,TextField,Grid, FormControl, InputLabel, Select, MenuItem,} from "@mui/material";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import authRegister from "../../services/authRegister";
import authLogin from "../../services/Login";
import { useForm } from "react-hook-form";
import Toastify from 'toastify-js'
import { ContextApi } from "../../store/context";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const { state, dispatch } = useContext(ContextApi);
  const navigate = useNavigate()
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm();

  const Login = async (data) => {
    try {
      const response = await authLogin.loginUser(data);  
      console.log(response) 
      localStorage.setItem("token" , response.data.token)
      
      let userData = {
        data : response
      }
      dispatch({ type: "USER_DATA", payload: userData });

      Toastify({
        text:response?.message,
        duration: 2000,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background :response?.message ? "green":"red"  
        },  
      }).showToast();

      setTimeout(() => {
        navigate("/")
      }, 2000);
      
    } catch (error) {
      Toastify({
        text:error,
        duration: 2000,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background :"red"
         
        },
       
      }).showToast();
     
      
    }
  };
  

  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
  } = useForm();
  const SignUp = async (data) => {
    try {
      const response = await authRegister.registerUser(data);
      console.log(response);
      Toastify({
        text:response?.message,
        duration: 2000,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background :"green"
         
        },
       
      }).showToast();

    } catch (error) {
      Toastify({
        text:error,
        duration: 2000,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background :"red"
         
        },
       
      }).showToast();
     
    }
  };
 

  return (
    <Grid
      container
      sx={{ margin: "0 auto", width: "100%" }}
      className="container"
      spacing={2}
    >
      <Grid item xs={12} md={6}>
        <Box sx={{ width: "100%" }}>
          <Box component={"h3"} sx={{ textAlign: "left" }}>
            Login
          </Box>
          <form onSubmit={handleLoginSubmit(Login)}>
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
             Email address *
          </Box>
            <TextField
              {...registerLogin('email', { required: 'Email is required' })}
              error={!!loginErrors.email}
              helperText={loginErrors.email?.message}
              variant="outlined"
              sx={{ mb: 1, padding: '12px 0px', width: '90%' }}
            />
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
           Password *
          </Box>
            <TextField
              {...registerLogin('password', { required: 'password is required' })}
              error={!!loginErrors.password}
              helperText={loginErrors.password?.message}
              variant="outlined"
              sx={{ mb: 1, padding: '12px 0px', width: '90%' }}
            /> 
          <Button
          type="submit"
            variant="contained"
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              backgroundColor: "#df6a2d",
              "&:hover": {
                backgroundColor: "#df6a2d",
                color: "white",
              },
            }}
            >
            Login
          </Button>
            </form>

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
          <Box sx={{ mt: 2, mb: 10 }} className="col-5">
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
                borderRadius: "5px",
                fontSize: "13px",
              }}
            >
              <FaFacebookF
                style={{ margin: "0px 10px 0px 10px", color: "white" }}
              />
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
                borderRadius: "5px",
                fontSize: "13px",
              }}
            >
              <FaGoogle
                style={{ margin: "0px 10px 0px 10px", color: "white" }}
              />
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
          <form onSubmit={handleSignUpSubmit(SignUp)}>
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
             Email address *
          </Box>
            <TextField
              {...registerSignUp('email', { required: 'Email is required' })}
              error={!!signUpErrors.email}
              helperText={signUpErrors.email?.message}
              variant="outlined"
              sx={{ mb: 1, padding: '12px 0px', width: '90%' }}
            />
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
           Name *
          </Box>
            <TextField
              {...registerSignUp('name', { required: 'Name is required' })}
              error={!!signUpErrors.name}
              helperText={signUpErrors.name?.message}
              variant="outlined"
              sx={{ mb: 1, padding: '12px 0px', width: '90%' }}
            />
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
           Phone Number *
          </Box>
            <TextField
              {...registerSignUp('phone', { required: 'phone number is required' })}
              error={!!signUpErrors.phone}
              helperText={signUpErrors.phone?.message}
              variant="outlined"
              sx={{ mb: 1, padding: '12px 0px', width: '90%' }}
            />
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
           Password *
          </Box>
            <TextField
              {...registerSignUp('password', { required: 'password is required' })}
              error={!!signUpErrors.password}
              helperText={signUpErrors.password?.message}
              variant="outlined"
              sx={{ mb: 1, padding: '12px 0px', width: '90%' }}
            />
          <Box sx={{ color: "#4e4e4e", fontWeight: "400", fontSize: "13px" }}>
           Gender *
          </Box>
            {/* <TextField
              {...registerSignUp('gender', { required: 'gender is required' })}
              error={!!signUpErrors.gender}
              helperText={signUpErrors.gender?.message}
              variant="outlined"
              sx={{ mb: 1, padding: '12px 0px', width: '90%' }}
            /> */}
        <FormControl fullWidth variant="outlined" sx={{ mb: 1 }}>
        <Select
          labelId="gender-label"
          id="gender"
          defaultValue="male"
          sx={{ mb: 1, width: '90%' }}
          {...registerSignUp('gender', { required: 'gender is required' })}
          error={!!signUpErrors.gender}
          
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
        {signUpErrors.gender && (
          <span style={{ color: '#d32f2f' ,fontSize:"0.8rem",fontWeight:"400",marginTop:"-7px",marginLeft:"14px" }}>{signUpErrors.gender.message}</span>
        )}
      </FormControl> 
          <Box >
            <Button
            type="submit"
            variant="contained"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                backgroundColor: "#df6a2d",
                "&:hover": {
                  backgroundColor: "#df6a2d",
                  color: "white",
                },
              }}
            >
              Register
            </Button>
          </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
