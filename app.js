const express = require('express');
const musicRoutes = require('./routes/music.routes');
const db = require('./config/database.config');
const bodyParser = require("body-parser");

const app = express();

app.get('/', (request, response) => {
    response.send('Estamos en la home');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(musicRoutes);

db();

app.listen(5000, () => {
    console.log("Express escuchando por el puerto 5000")
});