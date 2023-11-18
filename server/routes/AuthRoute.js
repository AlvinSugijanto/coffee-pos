import express from "express";
import {
    login,
    register

} from "../controllers/AuthController.js";

import UserValidator from "../validators/UserValidator.js";

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', UserValidator.validateCreateUser(), register);

// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

export default authRouter;