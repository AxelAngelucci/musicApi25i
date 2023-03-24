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

//ACCIONES MEDIANTE ID QUE EXTRAEMOS DE LOS PARAMETROS

const getTrackById = async (request, response) => {
    const { id } = request.params;
    try {
        const track = await trackModel.find({ _id: id });
        if (track.length < 1) return response.status(404).json({ message: "not fonund" })
        return response.status(200).json(track);
    } catch (error) {
        return response.status(500).json({ message: "Internal server error", error });
    }
}

const updateTrackById = async (request, response) => {
    const id = request.params.id;
    try {
        await trackModel.updateOne({ _id: id }, request.body);
        return response.status(200).json({ message: "Canción actualizada" })
    } catch (error) {
        return response.status(500).json({ message: "Internal server error" });
    }
}

const deleteTrackById = async (req, res) => {
    const id = req.params.id
    try {
        await trackModel.deleteOne({ _id: id });
        return res.status(200).json({ message: "canción eliminada :(" })
    } catch (error) {
        return resizeBy.status(500).json({ message: "Internal server error" });
    }
}


module.exports = { postNewTrack, getAllTracks, updateTrack, deleteTrack, getTrackById, updateTrackById, deleteTrackById };