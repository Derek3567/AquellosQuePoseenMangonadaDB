import multer from 'multer';
import AppError from '../utils/appError';
import { HTTP_STATUS } from '../utils/HttpCodes.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const savename = file.originalname.replace(/\s+/g, '-').toLowerCase();
        cb(null, `${Date.now()}-${savename}`);
    }
});


const fileFilter = (req, file, cb) => {
    if(!file.maintype.startsWith('image/')) {
        return cb(new AppError('Only images are allowed', HTTP_STATUS.BAD_REQUEST));
    };
    cb(null, true);
};


const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
});

export default upload;