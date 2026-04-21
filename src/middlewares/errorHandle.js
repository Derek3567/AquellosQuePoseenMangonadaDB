import { HTTP_STATUS } from "../utils/HttpCodes.js";

const errorHanlder = (err, req, res, next) => {
    let statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    let message = err.message || 'Internal Server Error';
}

    if(error.name === 'ValidationError') {
        statusCode = HTTP_STATUS.UNPROCESSABLE_ENTITY;
        message = (Object.values(error.errors).map(item => item.message)).join(', ');
        }

    
    const response = {
        success: false,
        message
    };

    if (process.env.NODE_ENV !== 'production'){
        response.stack = error.stack;
        
    }

    return res.status(statusCode).json(response);

export default errorHandler;