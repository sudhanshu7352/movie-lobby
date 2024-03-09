const User = require("../models/user.model");

// Middleware function to check admin status
async function checkLoginStatusMiddleware(request, response, next) {
    const {userId} =request;
    const user = await User.findOne({ userId: userId});
    
    if (!user) {
        return response.status(200).json({
            status: 'FAILED',
            message: "please login first."
        });

    }

    next();
}

module.exports = checkLoginStatusMiddleware;
