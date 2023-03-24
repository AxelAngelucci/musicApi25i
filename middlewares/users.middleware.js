const { check, validationResult } = require('express-validator');
const useValidationResult = require('../utilis/useValidationResult');

const signupCheck = [
    check('email')
        .trim()
        .not()
        .isEmpty().
        withMessage("Por favor ingrese un email")
        .isEmail()
        .withMessage("Eso no es un email valido"),
    check('password')
        .not()
        .isEmpty()
        .isLength(8)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
        .withMessage("La contraseña debe tener mayusculas minusculas y un minimo de 8 caracteres"),
    (req, res, next) => {
        useValidationResult(req, res, next);
    }
]

module.exports = signupCheck;