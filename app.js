const express = require('express');
const mongoose =  require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//Middleware 
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const medsRoute = require('./routes/meds');
const membersRoute = require('./routes/members');

app.use('/meds', medsRoute);
app.use('/members', membersRoute);

//ROUTES
app.get('/',(req, res) => { 
    res.send('We are on home'); 
});


//Connect to DB

mongoose.connect(process.env.DB_CONNECTION ,{useNewUrlParser: true, useUnifiedTopology: true}, 
    ()=> {
        console.log('connected to DB');
    });

//How to start listening to the server

app.listen(process.env.PORT || 3000);




