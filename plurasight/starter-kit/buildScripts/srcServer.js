import express from 'express';
import path from 'path';
import open from 'open';

const port = 8000;
const app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err) {
    console.log('Site port error');
  } else {
    open('http://localhost:' + port);
  }
});
