const jsonwebtoken = require("jsonwebtoken");

const tokenSign = async (user) => {
    const token = jsonwebtoken.sign(
        {
            _id: user._id,
            email: user.email,
            role: user.role
        },
        "MI_CONTRASENA",
        {
            expiresIn: "2h"
        }
    );
    return token;
}

const verifyToken = async (token) => {
    try {
        return jsonwebtoken.verify(token, "MI_CONTRASENA");
    } catch (error) {
        console.log(error)
    }
}

module.exports = {tokenSign, verifyToken}