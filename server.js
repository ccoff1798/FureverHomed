const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// Configure and link a session object with the sequelize store should be assigned to a key and stored in .env file.
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  // saveUnintialized: true, allows for app to function even it values above are non existant.
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// app.use (session(sess)); using sess variable above with app.use() method to start the application with session defined above and to include middlewares below. Add express-session and store as Express.js middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//changed from true to false to take in info and send to next route
// code below tells express to serve the static files html, css, and javascript from the 'public' folder.
app.use(express.static(path.join(__dirname, 'public')));
// telling app to use routes imported from 'controller' folder assigned on line 5
app.use(routes);
// code below is method from sequelize, force: false,...if force: is true tables in databases will be dropped and recreated everytime when this code runs causing app to run slower and wasting energy. sequelize method below makes sure databases are syncronized first before starting the application as defined at, 'http://localhost:3001/'
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3001/'));
});
