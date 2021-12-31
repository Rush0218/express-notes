//import 
const path = require('path');
const router = require('express').Router();

//route for index
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//route for notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//route back through index
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router; 