const express = require('express');
var compression = require('compression');
const app = express();
const cors = require('cors');


//use
app.use(express.json());
app.use(cors());
app.use(compression());

//paths
const verifypath=require('./routes/verify');

//routes
//local
app.use("/filter",verifypath);

//remote
app.get('/live',(req,res)=>{
   // console.log
    res.send('we are on /live');
});


//
//server
var port = 3002;
app.listen(port, () => {
    console.log("server listening on port:" + port);
});
