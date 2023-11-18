
import sequelize from "../config/db.js";
import Menu from "../model/MenuModel.js";



// Define the seeder data
const menuList = [
  // Coffee
  {
    nama_menu: 'Caramel Macchiato',
    harga: '28000',
    image: '/menu/caramel-macchiato.jpg',
    description : '-',
    kategori_id: 1,
  },
  {
    nama_menu: 'Mocha Frappuccino',
    harga: '32000',
    image: '/menu/mocha-frappuccino.jpg',
    description : '-',
    kategori_id: 1,
  },
  {
    nama_menu: 'Iced Vanilla Latte',
    harga: '29000',
    image: '/menu/iced-vanilla-latte.jpg',
    description : '-',
    kategori_id: 1,
  },

  // Juice
  {
    nama_menu: 'Sunshine Citrus',
    harga: '22000',
    image: '/menu/sunshine-citrus.jpg',
    description : '-',
    kategori_id: 2,
  },
  {
    nama_menu: 'Berry Blast',
    harga: '24000',
    image: '/menu/berry-blast.jpg',
    description : '-',
    kategori_id: 2,
  },
  {
    nama_menu: 'Tropical Dream',
    harga: '25000',
    image: '/menu/tropical-dream.jpg',
    description : '-',
    kategori_id: 2,
  },

  // Milk
  {
    nama_menu: 'Cookies & Cream Milkshake',
    harga: '28000',
    image: '/menu/cookies-cream-milkshake.jpg',
    description : '-',
    kategori_id: 3,
  },
  {
    nama_menu: 'Matcha Green Tea Latte',
    harga: '30000',
    image: '/menu/matcha-green-tea-latte.jpg',
    description : '-',
    kategori_id: 3,
  },
  {
    nama_menu: 'Strawberry Shortcake Milkshake',
    harga: '32000',
    image: '/menu/strawberry-shortcake-milkshake.jpg',
    description : '-',
    kategori_id: 3,
  },

  // Snack
  {
    nama_menu: 'Truffle Fries',
    harga: '21000',
    image: '/menu/truffle-fries.jpg',
    description : '-',
    kategori_id: 4,
  },
  {
    nama_menu: 'Cheesy Garlic Bread',
    harga: '23000',
    image: '/menu/cheesy-garlic-bread.jpg',
    description : '-',
    kategori_id: 4,
  },
  {
    nama_menu: 'Spicy Chicken Popcorn',
    harga: '26000',
    image: '/menu/spicy-chicken-popcorn.jpg',
    description : '-',
    kategori_id: 4,
  },

  // Rice
  {
    nama_menu: 'Shrimp Fried Rice',
    harga: '30000',
    image: '/menu/shrimp-fried-rice.jpg',
    description : '-',
    kategori_id: 5,
  },
  {
    nama_menu: 'Teriyaki Chicken Don',
    harga: '28000',
    image: '/menu/teriyaki-chicken-don.jpg',
    description : '-',
    kategori_id: 5,
  },
  {
    nama_menu: 'Vegetarian Bibimbap',
    harga: '26000',
    image: '/menu/vegetarian-bibimbap.jpg',
    description : '-',
    kategori_id: 5,
  },

  // Dessert
  {
    nama_menu: 'Chocolate Hazelnut Delight',
    harga: '33000',
    image: '/menu/chocolate-hazelnut-delight.jpg',
    description : '-',
    kategori_id: 6,
  },
  {
    nama_menu: 'Salted Caramel Brownie',
    harga: '34000',
    image: '/menu/salted-caramel-brownie.jpg',
    description : '-',
    kategori_id: 6,
  },
  {
    nama_menu: 'Raspberry White Chocolate Cheesecake',
    harga: '36000',
    image: '/menu/raspberry-white-chocolate-cheesecake.jpg',
    description : '-',
    kategori_id: 6,
  },
];



// Function to seed the data
async function seedMenuData() {
  await sequelize.sync(); // Drop and recreate the table (if needed)

  try {
    await Menu.bulkCreate(menuList);
    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

export default seedMenuData;
