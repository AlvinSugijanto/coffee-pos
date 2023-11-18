
import sequelize from "../config/db.js";
import Category from "../model/CategoryModel.js";



// Define the seeder data
const categoryList = [
  // Coffee
  {
    nama: 'coffee',
    icon : '/icon/coffee.png'
  },
  {
    nama: 'juice',
    icon : '/icon/juice.png'
  },
  {
    nama: 'milk',
    icon : '/icon/milk.png'
  },
  {
    nama: 'snack',
    icon : '/icon/snack.png'
  },
  {
    nama: 'rice',
    icon : '/icon/rice.png'
  },
  {
    nama: 'dessert',
    icon : '/icon/dessert.png'
  },

];



// Function to seed the data
async function seedCategoryData() {
  await sequelize.sync(); // Drop and recreate the table (if needed)

  try {
    await Category.bulkCreate(categoryList);
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

export default seedCategoryData;
