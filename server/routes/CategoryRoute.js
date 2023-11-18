import express from "express";
import {
    getCategory, 

} from "../controllers/CategoryController.js";
 
const categoryRouter = express.Router();
 
categoryRouter.get('/category', getCategory);

// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
 
export default categoryRouter;