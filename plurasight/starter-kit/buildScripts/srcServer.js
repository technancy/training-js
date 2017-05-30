import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {"id": 1, "firstName":"Bob"},
    {"id": 2, "firstName":"Bobby"},
    {"id": 3, "firstName":"Bobbins"}
  ]);
});

app.listen(port, function(err){
  if (err) {
    console.log('Site port error');
  } else {
    open('http://localhost:' + port);
  }
});
