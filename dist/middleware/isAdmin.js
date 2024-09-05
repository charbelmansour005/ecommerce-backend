"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const errorFormatter_1 = require("../utils/errorFormatter");
const variables_1 = require("../helpers/variables");
const isAdmin = (req, res, next) => {
    try {
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            throw (0, errorFormatter_1.createError)(401, "Unauthenticated", "Unauthenticated");
        }
        const access_token = authHeader.split(" ")[1];
        let decodedToken;
        decodedToken = (0, jsonwebtoken_1.verify)(access_token, variables_1.variables.SECRET);
        if (req.userId && decodedToken.role === "admin") {
            return next();
        }
        throw (0, errorFormatter_1.createError)(403, "Unauthorized", "Unauthorized");
    }
    catch (error) {
        next(error);
    }
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=isAdmin.js.map