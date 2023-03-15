const music = require("../models/music.models");

const getMusicList = async (request, response) => {
    response.json(music);
}

module.exports = getMusicList;