import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Variant = db.define('variant', {
    nama_variant: DataTypes.STRING,
}, {
    freezeTableName: true,
    timestamps : false
});

export default Variant;

(async () => {
    await db.sync();
})();