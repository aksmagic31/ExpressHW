// add express and other useful tools
const router = require('express').Router()

const fs = require('fs')
const path = require('path')
// bring in uuid
const uuid = require('../helpers/uuid')

// the get function for router
router.get('/notes', (req, res) => {
    // const notesData = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'))
    const notesData = fs.readFileSync(path.join(process.cwd(), "db/db.json"), 'utf8');
    const parsedData = JSON.parse(notesData)
    res.json(parsedData)
})

// the post function to post new notes to saves and write it to file
router.post("/notes", (req,res) =>{
    const currentSaves = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/db/db.json"), 'utf8'));

    console.log(currentSaves)

    const newSaves = [...currentSaves, {title: req.body.title,text:req.body.text, id:uuid()}]

    console.log(newSaves);

    fs.writeFileSync(path.join(process.cwd(), "/db/db.json"), JSON.stringify(newSaves));
    res.send(currentSaves);
})

// the delete function to delete any chosen note files. 
router.delete("/notes/:id", (req,res) => {
    const currentSaves = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/db/db.json"), 'utf8'));

    const newSaves = currentSaves.filter(note => note.id !== req.params.id)

    fs.writeFileSync(path.join(process.cwd(), "/db/db.json"), JSON.stringify(newSaves));

    res.send(currentSaves);
    
})




// Export module
module.exports = router;