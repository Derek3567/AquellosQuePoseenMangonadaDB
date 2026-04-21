import { validationResult } from "express-validator";
'express-validator'

import appError from "../utils/appError.js";
import {HTTP_STATUS} from "../utils/HttpCodes.js";

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next();
    }
    const details = errors.array().map((err) => '${err.path}:${err.msg}').join(', ');
    return next(new appError('Validation error - ${details}', HTTP_STATUS.UNPROCESSABLE_ENTITY));
};


export default validate;