const express = require('express');
const { postNewTrack, getAllTracks, updateTrack, deleteTrack } = require('../controllers/music.controller');
const musicRoutes = express.Router();



musicRoutes.get('/music', getAllTracks);

musicRoutes.post('/music', postNewTrack);

musicRoutes.put('/music', updateTrack);

musicRoutes.delete('/music', deleteTrack);

module.exports = musicRoutes;