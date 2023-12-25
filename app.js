const express = require ("express")
const app = express();
// whole express library comes as a functoin

app.listen(3000, ()=>console.log("listening"))
app.use(express.static("public"))

// post
app.use(express.json({limit: "1mb"}))
app.post("/api", (req, res)=>{
    console.log(req.body);

});