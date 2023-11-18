import sequelize from "../config/db.js";
import Users from "../model/UserModel.js";
import bcrypt from "bcrypt";


async function seedUserData() {
    await sequelize.sync(); 

    try {
        await Users.create({
            email: 'admin123@gmail.com',
            password: bcrypt.hashSync('admin123', 10),
            name : 'admin ganteng',
            role : 'admin'
        });
        console.log('Seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
}


seedUserData();