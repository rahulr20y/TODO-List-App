const express = require('express');
const port = 8001;

const app = express();








//use express router
app.use('/',require('./routes'));



app.listen(port,function(err){
      if(err){console.log('Error in running server',err);return;}

      console.log('My server is running on port',port);
});