import userModel from "../models/userModel.js";
import validator from "validator";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Build a Token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
};

// Register User
const registerUser = async (req, res) => {
    const {email, password} = req.body;

    try {

        //check if user already exists
        const exist = await userModel.findOne({email});
        if (exist) return res.json({
            success: false,
            message: 'User already exists',
        });

        //validate email format
        if (!validator.isEmail(email)) return res.json({
            success: false,
            message: 'Please enter a valid email',
        });

        //make sure password length is >= 8
        if (password.length < 8) return res.json({
            success: false,
            message: "Password length cannot be less than 8",
        });

        //hashing user password
        const salt = await bcryptjs.genSalt(11);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //create and save new user
        const newUser = new userModel({
            email: email,
            password: hashedPassword,
        });
        const user = await newUser.save();

        //create token
        const token = createToken(user._id);

        //send response
        res.json({
            success: true,
            token,
        })

    } catch (error) {
        res.json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    };
};

const loginUser = async (req, res) => {
    res.json({
        success: true
    })
};

export {registerUser, loginUser};