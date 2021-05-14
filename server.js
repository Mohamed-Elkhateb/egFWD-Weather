// Setup empty JS object to act as endpoint for all routes
const projectData=[]




// Require Express to run server and routes
const express=require('express');
const app=express();
// Start up an instance of app
const bodyParser = require('body-parser');

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 2021;

// TODO-Spin up the server
const server=app.listen(port, listening);
function listening(){
   console.log('running on localhost: ${port}'); 
};


//routes
app.get('/Weather', GetTheWeather);
app.post('/Weather', PostUserResponse);



app.get("/orders", (req, res, next) => {
   res.json(["Orange","Apple","Watermellon"]);
});
//Functions
function GetTheWeather(req,res){

   res.send(projectData);
  }

function PostUserResponse(req,res){
   newItem = {
      temperature: req.body.temperature,
      date: req.body.date,
      userresponse: req.body.userresponse
    }
    projectData.push(req.body);
    res.send(projectData);
    console.log(projectData)
  }








