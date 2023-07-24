const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const morgan = require("morgan");
const port = 3000;
app.use(express.static(path.join(__dirname,'public')));
 // http logger
  app.use(morgan("combined"));
 //Template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'Resource\\views'));
// console.log("Path: ",path.join(__dirname,'Resouce\\views'));
app.get('/', (req, res) => {
// res.send('Hello World!')
res.render('home');
})
app.get('/new', (req, res) => {
  // res.send('Hello World!')
  res.render('news');
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
