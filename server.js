const path = require('path');
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//turn on routes
app.use(routes);

//turn on connection to db and server
//force:false prevents the database from being dropped and recreated at every startup
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});