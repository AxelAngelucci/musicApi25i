const { response } = require("express");
const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs');
const { tokenSign } = require("../utilis/generateJWT");

const encriptar = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};

const desencriptar = (password, hash) => {
    const match = bcrypt.compareSync(password, hash) //booleano
    return match;
}

const signUpUser = async (request, response) => {
    const { password, ...body } = request.body;
    try {
        body.password = encriptar(password);
        await userModel.create(body);
        return response.status(200).json({ message: "Usuario creado" })
    } catch (error) {
        return response.status(500).json({ message: "Error del servidor" });
    }
}

const loginUserController = async (req, res) => {
    const email = req.body.email
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "email o contraseña incorrectos" });
        }
        const match = desencriptar(req.body.password, user.password);
        if (!match) {
            return res.status(404).json({ message: "email o contraseña incorrectos", match: match });
        } else {
            const data = {
                token: await tokenSign(user),
                user: user
            }
            return res.status(200).json({ message: "Iniciaste sesion!!!!!", data: data});
        }
    } catch (error) {
        return res.status(500).json({ message: "Error del servidor" });
    }
}

module.exports = { signUpUser, loginUserController };