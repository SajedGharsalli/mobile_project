const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const jwt = require('jsonwebtoken');
//token hashing key
const key = "7395592833c5596f3acb166837f129ab11246f4c4baf55aadde5c3b0d5329a26"

const router = express.Router();

// Middleware to log requests
router.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    console.log('Request body:', req.body);
    next();
});
//----------------------------------------signup---------------------------------------------------//
router.post('/signup', async (req, res) => {
    let { name, email, password } = req.body;
    name = name ? name.trim() : ' ';
    email = email ? email.trim() : ' ';
    password = password ? password.trim() : '';

    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
        // Additional logging
        console.log('Processing signup request for email:', email);
        //check empty fields
        if (name === "" || email === "" || password === "") {
            console.log('Empty input fields');
            return res.json({
                status: "FAILED",
                message: "Empty input fields !"
            });
            //input validation
        } else if (!name.match(nameRegex)) {
            console.log('name not valid');
            return res.json({
                status: "FAILED",
                message: "Invalid name format. Name should contain only alphabetic characters."
            });
        } else if (!email.match(emailRegex)) {
            console.log('email not valid');
            return res.json({
                status: "FAILED",
                message: "Invalid email format."
            });
        } else if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
            console.log('passwd not valid');
            return res.json({
                status: "FAILED",
                message: "Invalid password format. Password should be at least 8 characters long and include both upper and lower case and numbers."
            });
        }
        //check for existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log('userexists');
            return res.json({
                status: "FAILED",
                message: "User already exists"
            });
        }
        //hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        //create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        //generate a token
        const token = newUser.generateAuthToken();
        newUser.token = token;

        const result = await newUser.save();

        res.json({
            status: "SUCCESS",
            message: "Signup successful",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.json({
            status: "FAILED",
            message: "An error occurred during signup"
        });
    }
});
//----------------------------------------------------login--------------------------------------------//
router.post('/login', async (req, res) => {
    let { email, Password } = req.body;

    email = email ? email.trim() : '';
    console.log(email);


    password = Password ? Password.trim() : '';
    console.log(Password);
    try {
        //check empty fields
        if (email === '' || Password === '') {
            return res.json({
                status: "FAILED",
                message: "Empty input fields !"
            });
        }
        //check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                status: "FAILED",
                message: "Invalid email"
            });
        }
        //compare user password
        const hashedPassword = user.password;
        const passwordMatch = await bcrypt.compare(Password, hashedPassword);

        if (passwordMatch) {
            // Generate a new token upon successful login
            const token = jwt.sign({ _id: user._id }, key);

            // Update the user's token in the database
            user.token = token;
            await user.save();
            res.json({
                status: "SUCCESS",
                message: "Signin successful",
                data: user,
                token: user.token
            });
        } else {
            res.json({
                status: "FAILED",
                message: "Incorrect password"
            });
        }
    } catch (error) {
        console.error(error);
        res.json({
            status: "FAILED",
            message: "An error occurred during login"
        });
    }
});
module.exports = router;
