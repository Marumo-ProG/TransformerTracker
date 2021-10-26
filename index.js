// including my modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var dotenv = require('dotenv');
dotenv.config();

var {render} = require('ejs');

var app = express();

// configuring the view engine settings
app.set('view engine','ejs');
app.set('views','views');

// configuring the middlewares
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//getting server roots
app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/system', (req,res)=>{
    res.render('system');
});

// initialising the running of the server
app.listen(process.env.PORT || 3000, console.log("server running on port 3000"));