const express = require('express');
const multer = require('multer');
const { postNewTrack,
    getAllTracks,
    updateTrack,
    deleteTrack,
    getTrackById,
    updateTrackById,
    deleteTrackById } = require('../controllers/music.controller');
const {authMiddleware, checkAdminMiddleware} = require('../middlewares/jwt.middleware');
const musicRoutes = express.Router();

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        const path = `${__dirname}/../storage`;
        cb(null, path);
    },
    filename: (request, file, cb) => {
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    }
});

const updateFile = multer({
    storage: storage
})


musicRoutes.post('/storage', updateFile.single("filename"), (req, res) => {
    res.json({ message: "Imagen cargada" })
})

musicRoutes.get('/music', authMiddleware, getAllTracks);
musicRoutes.get('/music/:id', authMiddleware, getTrackById);

musicRoutes.post('/music', checkAdminMiddleware, postNewTrack);

musicRoutes.put('/music', updateTrack);
musicRoutes.put('/music/:id', updateTrackById);

musicRoutes.delete('/music', deleteTrack);
musicRoutes.delete('/music/:id', deleteTrackById);


module.exports = musicRoutes;