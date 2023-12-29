const express = require ("express")
const app = express();
const Datastore = require('nedb')
// whole express library comes as a functoin

app.listen(3000, ()=>console.log("listening"))
app.use(express.static("public"))
// starting express local server


const database = new Datastore("database.db");
database.loadDatabase();
// initilizing the database and calling it


// post
app.use(express.json({limit: "1mb"}))   
// express feature to limit the inocoming document size to 1 mb
app.post("/api", (request, response) => {           //getting the post request with fetch in our api
    console.log("I got a request!");
    const data = request.body;
    const time = Date.now();        //getting a timestamp
    data.timeStamp = time;
    // pushing it into thedatabase
    
    database.insert(data);
    response.json({
      status: "success",
      time: data.timeStamp,
      latitude: data.lat,
      longitude: data.lon,
      mood: data.inputMood
    });

  });