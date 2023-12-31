function setup(){

// for video
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(320,240);
  
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



function doStuff(){


const inputMood = document.getElementById("textInput").value;
// console.log(inputMood)
video.loadPixels();
const image64 = video.canvas.toDataURL();
  // checking if geoloaction coordinates are available or not available
if ("geolocation" in navigator) {
  console.log("GeoLocation Available");
  // if geolocation avaiable
  navigator.geolocation.getCurrentPosition(async (position) => {
      // console.log(position.coords);
      // seting the coordinates for the marekr
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      marker.setLatLng([lat, lon]);
      // setting the marer ad the marker location
      map.setView([lat, lon],10);
      // console.log(lat, lon);

      // sending data to post in server side
      const data = {lat, lon, inputMood, image64};
      
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
      };
      const responseFetch = await fetch ("/api", options )
      const dataJson = await responseFetch.json();
      console.log(dataJson)
    });
  
} else {
  console.log("GeoLocation Not Available");
}


//   up is code for getting geolocation with the navigator API
}

// doStuff();
document.getElementById("button").onclick= ()=>{doStuff()};



}

