//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors')
var path = require('path');

var app = express();

const route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected', () => {
    console.log("Connected successfully");
});

mongoose.connection.on('error', (err) => {
    if(err) {
        console.log("Error connecting to database : " + err)
    }
    console.log("Connected successfully");
});

const port = 3000;


app.use(cors());
app.use(bodyparser.json());

app.use('/api',route)

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port,() => {
    console.log("server started at port" + port)
})
