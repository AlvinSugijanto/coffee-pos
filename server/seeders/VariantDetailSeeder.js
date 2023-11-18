
import sequelize from "../config/db.js";
import VariantDetail from "../model/VariantDetailModel.js";



// Define the seeder data
const variantList = [
  // Coffee
  {
    jenis: 'hot',
    variant_id : 1
  },
  {
    jenis: 'ice',
    variant_id : 1
  },
  {
    jenis: 'S',
    variant_id : 2
  },
  {
    jenis: 'R',
    variant_id : 2
  },
  {
    jenis: 'L',
    variant_id : 2
  },
  {
    jenis: 'S',
    variant_id : 3
  },
  {
    jenis: 'R',
    variant_id : 3
  },
  {
    jenis: 'L',
    variant_id : 3
  },
  {
    jenis: 'S',
    variant_id : 4
  },
  {
    jenis: 'R',
    variant_id : 4
  },
  {
    jenis: 'L',
    variant_id : 4
  },
  
];



// Function to seed the data
async function seedVariantDetailData() {
  await sequelize.sync(); // Drop and recreate the table (if needed)

  try {
    await VariantDetail.bulkCreate(variantList);
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

export default seedVariantDetailData;
