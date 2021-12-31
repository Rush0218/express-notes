//import modules
const express = require('express');
const html = require('routes/htmlRoutes.js');
const api = require('routes/apiRoutes.js');

//initiate 
const app = express();
//setup port for heroku deployment
const PORT = process.env.PORT || 3001;

//Express.js middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//use api/html routes
app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => {
    console.log(`Deployed successfully server is on port ${PORT}`);
});

