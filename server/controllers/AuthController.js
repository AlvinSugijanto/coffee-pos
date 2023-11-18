import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {

    const { email, password } = req.body;

    console.log(email);

    const user = await User.findOne({
        where: {
            email: email,
        }
    });

    if (!user) {
        return res.status(400).json({
            message: 'User Not Found'
        });
    }

    if (bcrypt.compareSync(password, user.password)) {

        const token = generateToken(user.id);
        
        return res.status(200).json({
            message: 'Successfully Login !',
            user: user.dataValues,
            token: token
        });
    } else {
        return res.status(400).json({
            message: 'Invalid Password'
        });
    }
}

export const register = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({
        where: {
            email: email,
        }
    });

    if (user) {
        return res.status(400).json({
            message: 'Email Already Exist'
        });
    }

    const createUser = await User.create(req.body);
    const token = generateToken(createUser.id);
    const data = { ...createUser.dataValues, token }

    if (createUser) {
        return res.status(200).json({
            message: 'User created !',
            data: data
        });
    }



}

export const generateToken = (id) => {
    return jwt.sign({ id }, '123', {
        expiresIn: '1d'
    })
}