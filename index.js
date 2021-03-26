const express = require('express');
const port = 8001;
const path=require('path');

const app = express();

const db = require('./config/mongoose');



//set up the view engine
app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded()); //parser middleware
app.use(express.static('assets'));



//use express router
app.use('/',require('./routes'));



app.listen(port,function(err){
      if(err){console.log('Error in running server',err);return;}

      console.log('My server is running on port',port);
});