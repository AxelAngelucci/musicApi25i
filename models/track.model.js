const mongoose = require('mongoose');

const MusicModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    author: {
        type: String
    }
});

module.exports = mongoose.model("music", MusicModel);