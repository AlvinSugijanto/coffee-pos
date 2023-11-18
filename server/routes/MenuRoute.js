import express from "express";
import {
    getMenu,
    getMenuByCategory,
    createMenu
} from "../controllers/MenuController.js";

import MenuValidator from "../validators/MenuValidator.js";
import { upload } from "../lib/multer.js";


const menuRouter = express.Router();

menuRouter.get('/menu', getMenu);
menuRouter.get('/menu/byCategory/:kategori', getMenuByCategory);
menuRouter.post('/menu/add', upload.single('image'), MenuValidator.validateCreateMenu(), createMenu);


export default menuRouter;