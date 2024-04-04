export const ErrorHandler = (error) => {
    if (error.response) {
      console.log("Error Handler Call", error.response);
      if (error.response.status === 400) {
        const token = localStorage.getItem("jwt");
        localStorage.clear();
        // window.location.reload();
        if (token) {
          localStorage.clear();
        
        }
      }
      return error.response.data.message;
    } else if (error.request) {
      return error.message;
    } else {
      return "Something went wrong";
    }
  };