const express = require ("express")
const app = express();
// whole express library comes as a functoin

app.listen(3000, ()=>console.log("listening"))
app.use(express.static("./public"))