const express = require('express');
const musicRoutes = require('./routes/music.routes');

const app = express();

app.get('/', (request, response) => {
    response.send('Estamos en la home');
});

app.use(musicRoutes);

app.listen(5000, () => {
    console.log("Express escuchando por el puerto 5000")
});