// adding map
var map = L.map('mapID').setView([0, 0], 1);

// Gwtting layers of tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"></a>'
}).addTo(map);


// marker

// initializing the marker with icon
const marker = L.marker([0,0]).addTo(map);

// checking if geoloaction coordinates are available or not available
if ("geolocation" in navigator) {
    console.log("GeoLocation Available");
    // if geolocation avaiable
    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords);
        // seting the coordinates for the marekr
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        marker.setLatLng([lat, lon]);
        // setting the marer ad the marker location
        map.setView([lat, lon],10);

        // sending data to post in server side
        const data = {lat, lon};
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data) 
        };
        fetch ("/api", options )
      });
    
  } else {
    console.log("GeoLocation Not Available");
  }


//   up is code for getting geolocation with the navigator API