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
        console.log(position.coords);
        // seting the coordinates for the marekr
        marker.setLatLng([position.coords.latitude, position.coords.longitude]);
        // setting the marer ad the marker location
        map.setView([position.coords.latitude, position.coords.longitude],10);
      });
    
  } else {
    console.log("GeoLocation Not Available");
  }


//   up is code for getting geolocation with the navigator API