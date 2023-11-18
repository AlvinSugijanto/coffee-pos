import { body, validationResult } from 'express-validator';

class MenuValidator {

    validateCreateMenu() {

        return [
            body('nama_menu').notEmpty().withMessage('Menu name is required.'),
            body('harga').isNumeric().withMessage('Price must be a numeric value.'),
            body('description').notEmpty().withMessage('Description is required.'),
            body('kategori_id').isInt().withMessage('Category ID must be an integer.'),
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json(errors.array() );
                }
                next();
            }
        ];

    }
}

export default new MenuValidator();
