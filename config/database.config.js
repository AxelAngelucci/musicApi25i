const mongoose = require('mongoose');

const db = () => {
    try {
        mongoose.connect('mongodb+srv://admin:uVDrvLgJgoci4Qka@cluster0.3mjhe6d.mongodb.net/?retryWrites=true&w=majority');
        console.log("Conectados a mongodb atlas")
    } catch (error) {
        console.log("Algo salió mal");
        console.log(error);
    }
}

module.exports = db;