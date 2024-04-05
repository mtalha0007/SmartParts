import React, { Fragment,useContext, useEffect, useRef, useState } from "react";
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
  Button
} from "@mui/material";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";


// import usePlacesAutocompleteService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import usePlacesAutocomplete from "use-places-autocomplete";
// import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
// import Geocode from "react-geocode";
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
  } from "react-geocode";

const googleMapKey =`AIzaSyCsT-b8-J4wnqKYUBFROMPQr_IEYdjNiSg`;
console.log(googleMapKey)
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
    <Autocomplete
      sx={{ my: 2 }}
      size="small"
      fullWidth
      id="combo-box-demo"
      onInputChange={(event, newInputValue) => {
        setValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        geoAddress(newValue);
        setAddress(newValue);
      }}
      defaultValue={address}
      value={address}
      options={data.map((option) => option.description)}
      renderInput={(params) => (
        <TextField {...params} label="Enter Your Pin Location" />
      )}
    />
  );
};

function Map({ newAddress, defaultData }) {
  console.log("🚀 ~ file: AddressForm.js:69 ~ Map ~ newAddress:", newAddress);
  console.log("🚀 ~ file: AddressForm.js:69 ~ Map ~ defaultData:", defaultData);

//  
 setKey(googleMapKey);
  setRegion("pk");

  // *For Map Positions
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const [city, setCity] = useState("");

  // *For Address
  const [address, setAddress] = useState("");
  console.log("🚀 ~ file: AddressForm.js:91 ~ Map ~ address:", address);

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
    console.log("Address before geocoding:", address);
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

  useEffect(() =>  {
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
      { isLoaded ? (
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
      ):""}
    </Fragment>
  );
}

function AddressForm({ open, onClose, loading, defaultData, save }) {
 

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  // *For Address Detail
  const [addressDetail, setAddressDetail] = useState();
  const [selectedLabel, setSelectedLabel] = useState("");

  // *For Submit Form
  const submitForm = (formData) => {
    try {
      let obj = {
        ...addressDetail,
        tag: selectedLabel ?? "Other",
        street: formData.street,
        area: formData.area,
        house_building: formData.house,
        apt_room: formData.apt,
      };
      save(obj);
      reset();
    } catch (error) {
      console.log( error?.message);
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
  }, [defaultData]);

  return (
    <Dialog
     
      maxWidth="xs"
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          width: "80%",
          height: "auto",
          borderRadius: 2,
          py: { xs: 1.5, md: 3 },
          px: { xs: 1, md: 3 },
        },
      }}
    >
      <IconButton
        color="primary"
        onClick={() => {
          onClose();
          reset();
        }}
        sx={{ position: "absolute", right: 13, top: 13 }}
      >
        <Close />
      </IconButton>
      <DialogTitle
        sx={{ textAlign: "center", fontSize: "18px", fontWeight: 700 }}
      >
        {"deliveryAddress"}
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
            <InputLabel>{"location"}</InputLabel>
            <TextField
              size={"small"}
              disabled={true}
              sx={{width:"100%"}}
              placeholder={"location"}
              error={errors?.address?.message}
              register={register("address", {
                required: "location",
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>{"street"}</InputLabel>
            <TextField
              size={"small"}
              placeholder={"street"}
              error={errors?.street?.message}
              register={register("street", {
                required: "street",
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>{"area"}</InputLabel>
            <TextField
              size={"small"}
              placeholder={"area"}
              error={errors?.area?.message}
              register={register("area", {
                required: "area",
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>{"house"}</InputLabel>
            <TextField
              size={"small"}
              placeholder={"house"}
              error={errors?.house?.message}
              register={register("house", {
                required: "house",
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>{"room"}</InputLabel>
            <TextField
              size={"small"}
              placeholder={"room"}
              error={errors?.apt?.message}
              register={register("apt", {
                required: "room",
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">{"addLabel"}</Typography>
            <Box
              sx={{ display: "flex", gap: "20px", alignItems: "center", my: 1 }}
            >
              <Box>
                <IconButton
                  disableRipple
                  onClick={() => setSelectedLabel("Home")}
                  sx={{
                    p: 1.5,
                    // bgcolor: selectedLabel === "Home" && Colors.primary,
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
                    ".MuiSvgIcon-root": {
                    //   color:
                    //     selectedLabel === "Home"
                    //       ? Colors.white
                    //       : Colors.tertiary,
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
                    // bgcolor: selectedLabel === "Work" && Colors.primary,
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
                    ".MuiSvgIcon-root": {
                    //   color:
                    //     selectedLabel === "Work"
                    //       ? Colors.white
                    //       : Colors.tertiary,
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
                    // bgcolor: selectedLabel === "Favorite" && Colors.primary,
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
                    ".MuiSvgIcon-root": {
                    //   color:
                    //     selectedLabel === "Favorite"
                    //       ? Colors.white
                    //       : Colors.tertiary,
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
                    // bgcolor: selectedLabel === "Other" && Colors.primary,
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`,
                    ".MuiSvgIcon-root": {
                    //   color:
                    //     selectedLabel === "Other"
                    //       ? Colors.white
                    //       : Colors.tertiary,
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
                type={"submit"}
       
             >
                saveContinue
                </Button>
              <Box sx={{ mx: 0.5 }} />
              <Button
               
                onClick={() => {
                  onClose();
                  reset();
                }}
              >Cancel</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

export default AddressForm;
  
