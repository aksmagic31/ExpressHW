
// Node Modules
const path = require('path')
const router = require('express').Router()

// HTML Routes
// GET Route for notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('*',(req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
// Export module
module.exports = router;