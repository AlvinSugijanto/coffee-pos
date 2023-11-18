import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Category = db.define('kategori', {
    nama: {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    icon: DataTypes.STRING,
}, {
    freezeTableName: true,
    timestamps : false
});

export default Category;

(async () => {
    await db.sync();
})();