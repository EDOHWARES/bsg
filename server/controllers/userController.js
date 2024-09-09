import userModel from "../models/userModel.js";
import tempUserModel from "../models/tempUserModel.js";
import validator from "validator";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from "path";
import {dirname} from 'path';
import {fileURLToPath} from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function To Read HTML File And Replace Placeholder
const getEmailTemplate = (filePath, verificationCode) => {
    let template = fs.readFileSync(filePath, 'utf8');
    template = template.replace(`{{VERIFICATION_CODE}}`, verificationCode);

    return template;
};

// Token-Creator Function
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

        //create a random 8 digit code for email verification
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

        //hash the verification code
        const s = await bcryptjs.genSalt(11);
        const hashedVCode = await bcryptjs.hash(verificationCode, s);

        //create and save collections temporarily
        const tempUser = new tempUserModel({
            email: email,
            password: hashedPassword,
            verificationCode: hashedVCode,
        });
        await tempUser.save();


        //create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_4_NODEMAILER,
                pass: process.env.EMAIL_NODEMAILER_PASSWORD,
            }
        });

        //path to the html template
        const templatePath = path.join('templates', 'emailTemplate.html');

        //get the email content with the verification code inserted
        const emailContent = getEmailTemplate(templatePath, verificationCode);
        console.log(typeof(verificationCode), verificationCode)

        //define the email options 
        const mailOptions = {
            from: process.env.EMAIL_4_NODEMAILER,
            to: email,
            subject: 'Email Verification Code',
            html: emailContent,
            headers: {
                "X-Priority": "1",
                "X-MSMail-Priority": "High",
                Importance: "High",
            },
        };

        //send the verification code to email
        await transporter.sendMail(mailOptions);

        res.json({
            success: true,
            message: 'Verification code sent to email'
        });

    } catch (error) {
        res.json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    };
};

// Verify Code sent To Email
const verifyEmail = async (req, res) => {
    const {email, verificationCode} = req.body;
    console.log(typeof(verificationCode), verificationCode);

    try {
        const tempUser = await tempUserModel.findOne({email});
        console.log(tempUser);
        if (!tempUser) return res.json({
            success: false,
            message: 'User not found!',
        });

        //check if verification code matches
        const isMatch = await bcryptjs.compare(verificationCode, tempUser.verificationCode);
        console.log(isMatch)
        if (!isMatch) {
            return res.json({
                success: false,
                message: 'Invalid verification code'
            });
        }

        const newUser = new userModel({
            email: tempUser.email,
            password: tempUser.password
        });
        const user = await newUser.save();

        //delete the temporal user
        await tempUser.deleteOne({email});

        const token = createToken(user._id);

        return res.json({
            success: true,
            message: 'User successfully registered',
            token,
        });

    } catch (error) {
        res.json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    };

}

// Login User
const loginUser = async (req, res) => {
    
};

export {registerUser, verifyEmail, loginUser};