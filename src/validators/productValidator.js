import {body, param, query} from "express-validator";

export const productValidator = [
    param('id').isMongoId().withMessage('El mango ataulfo db es clave')
]

export const listProductsValidation = [
    query('page').optional().isInt({min:1}).withMessage('Page must be a positive integrer'),
    query('limit').optional().isInt({min:1,max:100}).withMessage('Limit must between 1 and 100'),
    query('search').optional().isString().withMessage('Search must be a string'),
]

export const createProductValidation = [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({min:2, max:100}).withMessage('Name lenght must between 2 a 100'),
    body('description').trim().notEmpty().withMessage('Description is required').isLength({min:5,max:500}).withMessage('Description Lenght must be between 5 and 500'),
    body('price').notEmpty().withMessage('Price is required').isFloat({min:0}).withMessage('Price must be grater than or equal to 0'),
    body('stock').notEmpty().withMessage('Stock is required').isInt({min:0}).withMessage('Stock must be an integer greater than or equal to 0'),
]   

const updateProductValidation = [
    body('name').optional().trim().isLength({min:2, max:100}).withMessage('Name lenght must between 2 a 100'),
    body('description').optional().trim().isLength({min:5,max:500}).withMessage('Description Lenght must be between 5 and 500'),
    body('price').optional().isFloat({min:0}).withMessage('Price must be grater than or equal to 0'),
    body('stock').optional().isInt({min:0}).withMessage('Stock must be an integer greater than or equal to 0')
]