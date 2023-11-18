import {Sequelize} from "sequelize";


const db = new Sequelize('reactjs','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;