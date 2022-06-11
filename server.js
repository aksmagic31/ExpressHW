// import modules

const express = require("express");

const path = require('path');

const app = express();


// Import Routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')


const PORT = process.env.PORT || 3003

// middleware code
app.use (express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



// const router = require("express").router()

// Call Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// this is for homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// listen to start
app.listen(PORT,() => console.log(`listening on port ${PORT}`));

// router.get("/note," (req,res)=>{
//     res.sendFile(path.join(__dirname))
// })

// const fs = require("fs");
// const { randomUUID } = require("crypto");

// router.post("/note",(req,res) => {
//     const currentSaves = fs.readFileSync(path.join(process.cwd(),"/db/db.json"))

//     const newSaves = [...currentSaves, {title : req.body.title, text.req.body.text, id: uuid())}]
// }