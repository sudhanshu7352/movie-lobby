const User = require("../models/user.model");


// Endpoint for user registration
const createUser = async (req, res) => {
    try {
        //check user
        const isUserExists = await User.findOne({ email: req.body.email });

        if (isUserExists) {
            res.status(201).send('User already exists,please use unique email.');

        } else {
            // Create new user
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password, // Not hashing the password
                isAdmin: req.body.isAdmin
            });
            // Save user to database
            await newUser.save();
            res.status(201).send('User registered successfully.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while registering the user.');
    }
};

// Endpoint for user login
const loginUser = async (req, res) => {
    try {
        // Find user by email and password
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (!user) {
            return res.status(404).send('Invalid email or password.');
        }
        res.status(200).send('Login successful.');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while logging in.');
    }
};
module.exports = { loginUser, createUser };