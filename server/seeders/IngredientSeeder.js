
import sequelize from "../config/db.js";
import Ingredient from "../model/IngredientModel.js";



const ingredientList = [
    // Coffee
    {
      nama: 'Espresso',
      keterangan: 'Coffee concentrate',
      stok: 100 
    },
    {
      nama: 'Caramel Sauce',
      keterangan: 'Sweet caramel-flavored sauce',
      stok: 50
    },
    {
      nama: 'Chocolate Syrup',
      keterangan: 'Sweet chocolate-flavored syrup',
      stok: 60
    },
    {
      nama: 'Milk',
      keterangan: 'Fresh milk',
      stok: 200
    },
    {
      nama: 'Vanilla Syrup',
      keterangan: 'Sweet vanilla-flavored syrup',
      stok: 40
    },
  
    // Juice
    {
      nama: 'Orange Juice',
      keterangan: 'Freshly squeezed orange juice',
      stok: 80
    },
    {
      nama: 'Mixed Berry Juice',
      keterangan: 'Blend of various berries',
      stok: 70
    },
    {
      nama: 'Tropical Fruit Mix',
      keterangan: 'Mix of tropical fruits',
      stok: 90
    },
  
    // Milk
    {
      nama: 'Cookies & Cream Ice Cream',
      keterangan: 'Cookies & cream-flavored ice cream',
      stok: 30
    },
    {
      nama: 'Matcha Powder',
      keterangan: 'Finely ground green tea powder',
      stok: 40
    },
    {
      nama: 'Strawberry Ice Cream',
      keterangan: 'Strawberry-flavored ice cream',
      stok: 25
    },
  
    // Snack
    {
      nama: 'Potatoes',
      keterangan: 'Fresh potatoes',
      stok: 120
    },
    {
      nama: 'Truffle Oil',
      keterangan: 'Truffle-infused oil',
      stok: 15
    },
    {
      nama: 'Garlic',
      keterangan: 'Fresh garlic',
      stok: 80
    },
    {
      nama: 'Cheese',
      keterangan: 'Cheese slices',
      stok: 50
    },
    {
      nama: 'Chicken',
      keterangan: 'Chicken pieces',
      stok: 100
    },
    {
      nama: 'Spices',
      keterangan: 'Assorted spices',
      stok: 90
    },
  
    // Rice
    {
      nama: 'Shrimp',
      keterangan: 'Fresh shrimp',
      stok: 60
    },
    {
      nama: 'Rice',
      keterangan: 'Steamed rice',
      stok: 200
    },
    {
      nama: 'Teriyaki Sauce',
      keterangan: 'Sweet teriyaki sauce',
      stok: 30
    },
    {
      nama: 'Chicken',
      keterangan: 'Grilled chicken pieces',
      stok: 80
    },
    {
      nama: 'Vegetables',
      keterangan: 'Assorted fresh vegetables',
      stok: 120
    },
  
    // Dessert
    {
      nama: 'Chocolate',
      keterangan: 'Sweet chocolate',
      stok: 70
    },
    {
      nama: 'Hazelnut Spread',
      keterangan: 'Creamy hazelnut spread',
      stok: 40
    },
    {
      nama: 'Caramel',
      keterangan: 'Sweet caramel',
      stok: 50
    },
    {
      nama: 'Brownie',
      keterangan: 'Chocolate brownie',
      stok: 25
    },
    {
      nama: 'Raspberry',
      keterangan: 'Fresh raspberries',
      stok: 35
    },
    {
      nama: 'Cream Cheese',
      keterangan: 'Cream cheese',
      stok: 30
    },
  ];
  



// Function to seed the data
async function seedIngredientData() {
  await sequelize.sync(); // Drop and recreate the table (if needed)

  try {
    await Ingredient.bulkCreate(ingredientList);
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

export default seedIngredientData;
