const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const morgan = require('morgan')
const methodOverride = require('method-override')
const port = 3000
const router = require('./routers')
const data = require('./config/database/mogoosee.js')
const SortMiddleware = require('./app/middlewares/SortMiddleware')
app.use(SortMiddleware)
app.use(methodOverride('_method'))
// const hbs = require('handlebars');
// connet data_mongodb
data.connect_mongodb()
app.use(
  express.urlencoded({
    extended: true,
  }),
) // html thi  co urlencode
app.use(express.json()) // gui data tu code js len thi co
app.use(express.static(path.join(__dirname, 'public')))
// http logger
// app.use(morgan("combined"));
//Template engine
app.engine(
  'handlebars',
  exphbs.engine({
    helpers: require('./helper/handlebars')
  }),
)

// cach 2
// hbs.registerHelper("sum", function(a, b)
// {
//     return parseInt(a) + parseInt(b);
// });


app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'Resource\\views'))
// console.log("Path: ",path.join(__dirname,'Resouce\\views'));
router(app)
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
