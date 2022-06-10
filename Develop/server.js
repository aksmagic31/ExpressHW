// import modules

const express = require("exress");

const path = require('path');

const app = express();


// Import Routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')


const PORT = process.env.PORT || 3001

// middleware code
app.use (express.JSON());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT,() => console.log(`listening on port ${PORT}`));

const router = require("express").router()

router.get("/note," (req,res)=>{
    res.sendFile(path.join(__dirname))
})

const fs = require("fs");
const { randomUUID } = require("crypto");

router.post("/note",(req,res) => {
    const currentSaves = fs.readFileSync(path.join(process.cwd(),"/db/db.json"))

    const newSaves = [...currentSaves, {title : req.body.title, text.req.body.text, id: uuid())}]
}