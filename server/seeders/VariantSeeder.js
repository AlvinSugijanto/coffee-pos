
import sequelize from "../config/db.js";
import Variant from "../model/VariantModel.js";



// Define the seeder data
const variantList = [
  // Coffee
  {
    nama_variant: 'type',
  },
  {
    nama_variant: 'size',
  },
  {
    nama_variant: 'ice',
  },
  {
    nama_variant: 'sugar',
  }

];



// Function to seed the data
async function seedVariantData() {
  await sequelize.sync(); // Drop and recreate the table (if needed)

  try {
    await Variant.bulkCreate(variantList);
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

export default seedVariantData;
