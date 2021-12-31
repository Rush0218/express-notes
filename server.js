//import modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');

//setup port for heroku deployment
const PORT = process.env.PORT || 3001;
//initiates server 
const app = express();



//Express.js middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));





