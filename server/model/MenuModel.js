import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Menu = db.define('menu', {

    nama_menu: {
        type: DataTypes.STRING,

    },
    harga: {
        type: DataTypes.INTEGER,

    },
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    kategori_id: DataTypes.INTEGER,

}, {
    freezeTableName: true,
    timestamps: false
});

export default Menu;

(async () => {
    await db.sync();
})();