var express = require('express');
var app = express();

app.use(express.static('demo'));

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
