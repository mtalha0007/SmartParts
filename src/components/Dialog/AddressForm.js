import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Add, Close, Favorite, Home, Work } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  InputLabel,
  Typography,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import usePlacesAutocomplete from "use-places-autocomplete";
import { setKey, setRegion, fromAddress, fromLatLng } from "react-geocode";


const googleMapKey = `AIzaSyCsT-b8-J4wnqKYUBFROMPQr_IEYdjNiSg`;


const PlacesAutocomplete = ({ address, geoAddress, setAddress }) => {

    const {
    setValue, 
    suggestions: { data },
  } = usePlacesAutocomplete({
    requestOptions: {
      region: "pk",
      componentRestrictions: { country: "pk" },
    },
    
  });
    
  return (
    <Box>
    <Autocomplete
      sx={{ my: 2 }}
      size="small"
      fullWidth
      id="combo-box-demo"
      onChange={(event, newValue) => {
          geoAddress(newValue);
          setAddress(newValue);
          
        }}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
          
        }}
      defaultValue={address}
      value={address}
      options={data.map((option) => option.description) }
      renderInput={(params) => (
        <TextField   {...params} label="Enter Your Pin Location" />
      )}
     />
    </Box>
  );
};

function Map({ newAddress, defaultData }) {
  setKey(googleMapKey);
  setRegion("pk");

  // *For Map Positions
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  // const [city, setCity] = useState("");

  // *For Address
  const [address, setAddress] = useState("");
  console.log("Map address=====>", address);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapKey,
    libraries: ["places"],  

  });

  const containerStyle = {
    width: "100%",
    height: "200px",
    borderRadius: "10px",
    boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: false,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  };

  const handleMapLoad = (map) => {
    map.addListener("click", (e) => {
      fromLatLng(e.latLng.lat(), e.latLng.lng()).then(
        (response) => {
          setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          setAddress(response.results[0].formatted_address);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  };

  const handleMarkerLoad = (marker) => {
    marker.addListener("dragend", (e) => {
      fromLatLng(e.latLng.lat(), e.latLng.lng()).then(
        (response) => {
          setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          setAddress(response.results[0].formatted_address);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  };
 
  const geoAddress = (address) => {
    
    if (address === null) {
      return;
    } else {
      fromAddress(address).then((response) => {
        setCenter({ 
          lat: response.results[0]?.geometry?.location?.lat,
          lng: response.results[0]?.geometry?.location?.lng,
        });
        setMarkerPosition({
          lat: response.results[0]?.geometry?.location?.lat,
          lng: response.results[0]?.geometry?.location?.lng,
        });
      });
    }
  };

  
  useEffect(() => {
    if (defaultData) {
      setCenter({ lat: defaultData?.latitude, lng: defaultData?.longitude });
      setMarkerPosition({
        lat: defaultData?.latitude,
        lng: defaultData?.longitude,
      });
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
        setMarkerPosition({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  useEffect(() => {
    if (address) {
      let obj = {
        address: address,
        latitude: center?.lat,
        longitude: center?.lng,
      };
      newAddress(obj);
    }
  }, [address]);

  return (
    <Fragment>
      <PlacesAutocomplete
        setAddress={setAddress}
        address={address}
        geoAddress={geoAddress}
      />
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          options={options}
          onLoad={handleMapLoad}
        >
          <MarkerF
            position={markerPosition}
            draggable={true}
            onDragEnd={(e) => {
              setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
            }}
            onLoad={handleMarkerLoad}
          />
        </GoogleMap>
      ) : (
        ""
      )}
    </Fragment>
  );
}

function AddressForm({
  open,
  onClose,
  defaultData,
  save,
  address: initialAddress,
}) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();

  // *For Address Detail
  const [addressDetail, setAddressDetail] = useState();
  // *For selectedLabel 
  const [ selectedLabel, setSelectedLabel] = useState("");
  //*For context to get user Token
  

  // *For Submit Form
  const submitForm = async (formData) => {
    try {
      var obj = {
        ...addressDetail,
        // _id: Math.floor(Math.random() * 1000000),
        tag: selectedLabel ? selectedLabel : "Others",  
        street: formData.street,
        area: formData.area,
        house_building: formData.house,
        apt_room: formData.apt,
       
      };
      save(obj);
      onClose();
      reset();
      console.log("formData===>", obj);
    } catch (error) {
      console.log(error?.message);
    }
  };

  useEffect(() => {
    if (defaultData) {
      setValue("address", defaultData?.address);
      setValue("street", defaultData?.street);
      setValue("area", defaultData?.area);
      setValue("house", defaultData?.house_building);
      setValue("apt", defaultData?.apt_room);
      setValue("label", defaultData?.tag);
    }
  }, [defaultData, setValue]);

  // *For showing selectedvalue in textField 
  useEffect(() => {
    setValue("address", initialAddress);
    setAddressDetail((prevDetails) => ({
      ...prevDetails,
      address: initialAddress,
    }));
  }, [initialAddress, setValue]);

  return (
    <Dialog
      maxWidth="lg"
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          height: "auto",
          borderRadius: 2,
          py: { xs: 1.5, md: 3 },
          px: { xs: 1, md: 3 },
        },
      }}
    >
      <IconButton
        onClick={() => {
          onClose();
          reset();
        }}
        sx={{ position: "absolute", right: 13, top: 13, color: "#df6a2d" }}
      >
        <Close />
      </IconButton>
      <DialogTitle
        sx={{ textAlign: "center", fontSize: "18px", fontWeight: 700 }}
      >
        {"Delivery Address"}
      </DialogTitle>
      <Box component="form" onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={12} sm={12}>
            <Map
              newAddress={(data) => {
                setAddressDetail(data);
                setValue("address", data?.address);
              }}
              defaultData={defaultData}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel>Location</InputLabel>
            <TextField
              size={"small"}
              disabled={true}
              value={getValues("address") || ""}
              sx={{ width: "100%" }}
              placeholder="location"
              error={!!errors.address}
              {...register("address", {
                required: "location is required",
              })}
              helperText={errors.address?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel>Street</InputLabel>
            <TextField
              size={"small"}
              sx={{ width: "100%" }}
              placeholder="Street"
              error={!!errors.street}
              {...register("street", {
                required: "street is required",
              })}
              helperText={errors.street?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel>Area</InputLabel>
            <TextField
              size={"small"}
              sx={{ width: "100%" }}
              placeholder="Area"
              error={!!errors.area}
              {...register("area", {
                required: "area is required",
              })}
              helperText={errors.area?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel>House</InputLabel>
            <TextField
              size={"small"}
              sx={{ width: "100%" }}
              placeholder="House"
              error={!!errors.house}
              {...register("house", {
                required: "house is required",
              })}
              helperText={errors.house?.message}    
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <InputLabel>Room</InputLabel>
            <TextField
              size={"small"}
              sx={{ width: "100%" }}
              placeholder="Room"
              error={!!errors.apt}
              {...register("apt", {
                required: "room is required",
              })}
              helperText={errors.apt?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Typography variant="subtitle1">Add Label</Typography> */}
            <Box
              sx={{ display: "flex", gap: "20px", alignItems: "center", my: 1 }}
            >
              <Box>
                <IconButton
                  disableRipple
                  onClick={() => setSelectedLabel("Home")}
                  sx={{
                     p: 1.5,
                     boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
                    ".MuiSvgIcon-root": {
                      color: selectedLabel === "Home" ? "#df6a2d" : "#b7b7b7",
                      width: "32px",
                      height: "32px",
                    },
                  }}
                >
                  <Home />
                </IconButton>
                <Typography variant="body1" sx={{ textAlign: "center", mt: 1 }}>
                  {"home"}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  disableRipple
                  onClick={() => setSelectedLabel("Work")}
                  sx={{
                    p: 1.5,
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
                    ".MuiSvgIcon-root": {
                      color: selectedLabel === "Work" ? "#df6a2d" : "#b7b7b7",
                      width: "32px",
                      height: "32px",
                    },
                  }}
                >
                  <Work />
                </IconButton>
                <Typography variant="body1" sx={{ textAlign: "center", mt: 1 }}>
                  {"work"}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  disableRipple
                  onClick={() => setSelectedLabel("Favorite")}
                  sx={{
                    p: 1.5,                
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
                    ".MuiSvgIcon-root": {
                      color:
                        selectedLabel === "Favorite" ? "#df6a2d" : "#b7b7b7",
                      width: "32px",
                      height: "32px",
                    },
                  }}
                >
                  <Favorite />
                </IconButton>
                <Typography variant="body1" sx={{ textAlign: "center", mt: 1 }}>
                  {"favourite"}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  disableRipple
                  onClick={() => setSelectedLabel("Other")}
                  sx={{
                    p: 1.5,                 
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
                    ".MuiSvgIcon-root": {
                      color: selectedLabel === "Other" ? "#df6a2d" : "#b7b7b7",
                      width: "32px",
                      height: "32px",
                    },
                  }}
                >
                  <Add />
                </IconButton>
                <Typography variant="body1" sx={{ textAlign: "center", mt: 1 }}>
                  {"other"}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ mt: 1 }}>
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{
                width:"50%",
                  backgroundColor: "#df6a2d",
                  color: "white",
                  "&:hover": { backgroundColor: "#df6a2d", color: "white" },
                }}
                type={"submit"}
              >
                Save
              </Button>
              <Box sx={{ mx: 0.5 }} />
              <Button
               sx={{
                width:"50%",
                backgroundColor: "#df6a2d",
                color: "white",
                "&:hover": { backgroundColor: "#df6a2d", color: "white" },
              }}
                onClick={() => {
                  onClose();
                  reset();
                }}
              >
                CANCEL
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

export default AddressForm;
