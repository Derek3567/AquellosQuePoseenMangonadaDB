import {body} from 'express-validator';

export const registerValidation = [
    body('name').trim().notEmpty().withMessage('De name is required').isLength({min: 2}).withMessage('Name mos jave at liast dos caracters'),
    body('email').trim().notEmpty().withMessage('De email is required').isEmail().withMessage('The email is not valid'),
    body('password').trim().notEmpty().withMessage('The password is recuaired').isLength({min: 8}).withMessage('The password must have at least 8 characters').matches(/[A-Z]/).withMessage('The password must contain at least one uppercase letter').matches(/[0-9]/).withMessage('The password must contain at least one number'),
];

export const loginValidation = [
    body('email').trim().notEmpty().withMessage('De email is required').isEmail().withMessage('The email is not valid').normalizeEmail(),
    body('password').trim().notEmpty().withMessage('The password is required'),
];