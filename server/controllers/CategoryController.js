import Category from "../model/CategoryModel.js";
 
export const getCategory = async(req, res) =>{
    try {
        const response = await Category.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}