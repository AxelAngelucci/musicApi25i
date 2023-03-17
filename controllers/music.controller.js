const music = require("../models/music.models");
const trackModel = require("../models/track.model");

const deleteTrack = async (request, response) => {
    try {
        await trackModel.deleteOne({ _id: request.body._id });
        return response.status(200).json({ message: "Canción Eliminada" });
    } catch (error) {
        return response.status(500).json({ message: "Error del servidor" });
    }
}

const updateTrack = async (request, response) => {
    try {
        await trackModel.updateOne({ _id: request.body._id }, request.body);
        return response.status(200).json({ message: "Canción Modificada" });
    } catch (error) {
        return response.status(500).json({ message: "Error del servidor" });
    }
}

const postNewTrack = async (request, response) => {
    try {
        await trackModel.create(
            request.body
        );
        return response.status(200).json({ message: "Canción guardada" })
    } catch (error) {
        return response.status(500).json({ message: "Error del servidor" });
    }
}

const getAllTracks = async (request, response) => {
    try {
        const tracks = await trackModel.find();
        return response.status(200).json(tracks);
    } catch (error) {
        return response.status(500).json({ message: "Error del servidor" });
    }
}


module.exports = { postNewTrack, getAllTracks, updateTrack, deleteTrack };