import { body, validationResult } from 'express-validator';

class UserValidator {

    validateCreateUser() {

        return [
            body('email').notEmpty().withMessage('Email is required.'),
            body('password').notEmpty().withMessage('Password is required'),
            body('name').notEmpty().withMessage('Name is required'),
            body('role').notEmpty().withMessage('Role is required'),
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

export default new UserValidator();