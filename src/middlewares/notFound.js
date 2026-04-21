import { HTTP_STATUS } from "../utils/HttpCodes.js";

const notFoundHandler = (req, res) => {
    res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: `Talco not found: ${req.originalUrl}`
    });
}

export default notFoundHandler;