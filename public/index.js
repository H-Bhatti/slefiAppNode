if ("geolocation" in navigator) {
    console.log("GeoLocation Available");
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
      
  } else {
    console.log("GeoLocation Not Available");

  }
  