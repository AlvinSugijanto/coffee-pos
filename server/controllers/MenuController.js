import Menu from "../model/MenuModel.js";
 
export const getMenu = async(req, res) =>{
    try {
        const response = await Menu.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getMenuByCategory = async(req, res) =>{
    try {
        const categoryId = parseInt(req.params.kategori, 10); // Convert to integer
        const response = await Menu.findAll({
            where:{
                kategori_id: categoryId
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createMenu = async(req, res) => {
    
    let requestData = req.body;
    requestData.image = req.file.path;
    try {
        const menu = await Menu.create(requestData);
        res.status(201).json(menu);
    } catch (error) {
        
    }
}
 
// export const updateUser = async(req, res) =>{
//     try {
//         await User.update(req.body,{
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Updated"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
 
// export const deleteUser = async(req, res) =>{
//     try {
//         await User.destroy({
//             where:{
//                 id: req.params.id
//             }
//         });
//         res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }