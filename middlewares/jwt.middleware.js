const { verifyToken } = require("../utilis/generateJWT")


const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            return res.status(401).json({message: "No hay token"})
        }
        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)
        if(!dataToken.role){
            return res.status(401).json({message: "No está autorizado"});
        }
        next()
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}

const checkAdminMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization){
            return res.status(401).json({message: "No hay token"})
        }
        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)
        if(!dataToken.role){
            return res.status(401).json({message: "No está autorizado"});
        }
        if(dataToken.role === "client"){
            return res.status(401).json({message: "No es administrador"});
        }
        next()
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = {authMiddleware, checkAdminMiddleware}