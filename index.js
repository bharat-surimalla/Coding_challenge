var express = require('express');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('other_files'));
app.listen(3000,()=>{
  console.log("Listening on Port 3000....\n*Open Browser and enter URL 'localhost:3000'");
});
