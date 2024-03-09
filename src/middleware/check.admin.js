const User = require("../models/user.model");

// Middleware function to check admin status
async function checkAdminStatusMiddleware(request, response, next) {
    const {email} =request;
    const isAdminCheck = await User.findOne({ email: email});;
    
    if (isAdminCheck?.isAdmin === false) {
        return response.status(200).json({
            status: 'FAILED',
            message: "Your are not authorize to perform this action."
        });

    }

    next();
}

module.exports = checkAdminStatusMiddleware;
