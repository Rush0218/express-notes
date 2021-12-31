//import modules 
const fs = require('fs');
const path = require('path');
const router = require('express').Router();

let notes = require('../db/db.json');

//create route to retrieve data from json file
router.get('/notes', (req, res) => {
    res.json(notes);
});

//create route for note id
router.get('/notes/:id', (req, res) => {
    const id = findById(req.params.id, notes);
    if (id) {
        res.json(id);
    } else {
        res.send(404);
    }
});

//create route to post new notes to notes.html
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = req.body;
    notes.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, "")
    );
    res.json(notes);
});

//create route to delete notes from notes.html
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    notes = notes.filter(note => note.id != id);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, "")
    );
    res.json(notes);
});

//export routes
module.exports = router; 