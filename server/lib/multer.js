import multer from "multer";

const storageEngine = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    },
});

export const upload = multer({
    storage: storageEngine,
});