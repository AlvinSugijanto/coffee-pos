import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {

    email: {
        type: DataTypes.STRING,

    },
    password: {
        type: DataTypes.STRING,

    },
    name: DataTypes.STRING,
    role: DataTypes.STRING,

}, {
    freezeTableName: true,
    timestamps: false
});

export default Users;


(async () => {
    await db.sync();
})();
