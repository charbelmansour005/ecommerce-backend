"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const User_js_1 = require("../models/User.js");
const errorFormatter_js_1 = require("../utils/errorFormatter.js");
const variables_js_1 = require("../helpers/variables.js");
const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            throw (0, errorFormatter_js_1.createError)(401, "Unauthenticated", "Unauthenticated");
        }
        const access_token = authHeader.split(" ")[1];
        let decodedToken;
        try {
            decodedToken = (0, jsonwebtoken_1.verify)(access_token, variables_js_1.variables.SECRET);
            const user = await User_js_1.User.findOne({ _id: decodedToken.userId });
            if (user.logoutAll === true) {
                throw (0, errorFormatter_js_1.createError)(401, "Unauthenticated", "Your password has been changed, please sign in again.");
            }
            if (user.isBanned === true) {
                throw (0, errorFormatter_js_1.createError)(401, "Banned", "You cannot access your account right now, please contact support.");
            }
        }
        catch (error) {
            const { message, name } = error;
            throw (0, errorFormatter_js_1.createError)(409, name, message);
        }
        if (!decodedToken) {
            throw (0, errorFormatter_js_1.createError)(401, "Unauthorized", "Unauthorized");
        }
        const { userId } = decodedToken;
        req.userId = userId;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.isAuth = isAuth;
//# sourceMappingURL=isAuth.js.map