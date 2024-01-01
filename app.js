const express = require ("express")
const app = express();
const Datastore = require('nedb')
// whole express library comes as a functoin
const fs = require('fs');

// getting the ess and file system from node



app.listen(3000, ()=>console.log("listening"))
app.use(express.static("public"))
// starting express local server


const database = new Datastore("database.db");
database.loadDatabase();
// initilizing the database and calling it


// post
app.use(express.json({limit: "1mb"}))   
// express feature to limit the inocoming document size to 1 

app.post("/api", (request, response) => {           //getting the post request with fetch in our api
    console.log("I got a request!");
    const data = request.body;
    const time = Date.now();        //getting a timestamp
    data.timeStamp = time;
    // pushing it into thedatabase
    // console.log(data.image64)

    // write file to foler
  const imagePath = saveImage64(data.image64, data.timeStamp)
    
// delete the 64 base data from the data.json efore sending it to the database
    delete data.image64
    data.imagepath = imagePath
    database.insert(data);
    response.json({
      status: "success",
      time: data.timeStamp,
      latitude: data.lat,
      longitude: data.lon,
      mood: data.inputMood
    });

  });


  // sending data to alldata.js using the fetch library

  app.get("/api",(request, response)=>{
    database.find({},(err,data)=>{
      if (err){
        console.error(err)
        response.end();
      };
      response.json(data);
    })
    
  })

  // function for making image path and return the path for storing in the database
  // while writing the images to a new folder in public/images

  function saveImage64(inputStream, filename){
    // Remove the data URI prefix and obtain the base64 data
    const data = inputStream.replace(/^data:image\/\w+;base64,/, '');
    
    // Convert base64 data to a buffer
    const buffer = Buffer.from(data, 'base64');
   // Save the buffer to a file
   fs.writeFile(`./public/images/${filename}.png`, buffer, (err) => {
     if (err) {
         console.error('Error saving image:', err);
     } else {
         console.log('Image saved successfully:', `./public/images/${filename}.png`);
     }
 });
 return (`./images/${filename}.png`)
  }