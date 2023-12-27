const express = require ("express")
const fs = require ("fs")
const app = express();
// whole express library comes as a functoin

app.listen(3000, ()=>console.log("listening"))
app.use(express.static("public"))

// post
app.use(express.json({limit: "1mb"}))
app.post("/api", (request, response) => {
    console.log("I got a request!");
    console.log(request.body);
    const data = request.body;
    response.json({
      status: "success",
      latitude: data.lat,
      longitude: data.lon,
    });
    fs.appendFile('./logs.txt', `${data.lat}, ${data.lon}
    `, (err) => {
        if (err) throw err;
        console.log('Line added to the file');
      });
  });

//  const text =  fs.readFileSync("./logs.txt","utf-8");
//  console.log(text)

//  fs.writeFileSync("./logs.txt","Random text add to file","utf-8")

// fs.appendFile('./logs.txt', "line added to file" + '\n', (err) => {
//     if (err) throw err;
//     console.log('Line added to the file');
//   });