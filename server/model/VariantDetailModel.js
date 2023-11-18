import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const VariantDetail = db.define('variant_detail', {
    jenis: DataTypes.STRING,
    variant_id: DataTypes.INTEGER,

}, {
    freezeTableName: true,
    timestamps : false
});

export default VariantDetail;

(async () => {
    await db.sync();
})();