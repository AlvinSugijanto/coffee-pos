import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Ingredient = db.define('ingredients', {
    nama: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,

}, {
    freezeTableName: true,
    timestamps : false
});

export default Ingredient;

(async () => {
    await db.sync();
})();