const express = require('express');
const getMusicList = require('../controllers/music.controller');
const musicRoutes = express.Router();



musicRoutes.get('/music', getMusicList);

module.exports = musicRoutes;