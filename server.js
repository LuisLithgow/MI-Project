'use strict'

const express    =  require('express');
const app        =  express();
const logger     =  require('morgan');
const path       =  require('path');
const bodyParser =  require('body-parser');
const PORT       =  process.argv[2] || process.env.PORT || 3000;

const homeRoute  = require('./routes/home_rt.js');
const session    = require('express-session');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') );
app.use(express.static(path.join(__dirname, 'public') ) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

//Routes
app.use('/', homeRoute)







app.listen(PORT, () => console.log(`Server magic on `, PORT) );

