import seedCategoryData from './KategoriSeeder.js';
import seedIngredientData from './IngredientSeeder.js';
import seedMenuData from './MenuSeeder.js';
import seedVariantData from './VariantSeeder.js';
import seedVariantDetailData from './VariantDetailSeeder.js';


async function runSeeders() {
    try {
        
        await seedCategoryData();
        await seedIngredientData();
        await seedMenuData();
        await seedVariantData();
        await seedVariantDetailData();

        console.log('All seeders completed successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Error running seeders:', error);
        process.exit(1);
    }
}

runSeeders();
