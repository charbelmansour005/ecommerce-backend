"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRegister = exports.postLogin = void 0;
const express_validator_1 = require("express-validator");
const errorFormatter_1 = require("../utils/errorFormatter");
const login_1 = require("../services/auth/login");
const register_1 = require("../services/auth/register");
const errorFormatter = ({ value, msg, param, location }) => {
    return {
        msg,
    };
};
const postLogin = async (req, res, next) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
        if (!errors.isEmpty()) {
            throw (0, errorFormatter_1.createError)(422, "Validation Error", errors
                .array()
                .map(({ msg }) => " " + msg)
                .toString()
                .trim());
        }
        const body = req.body;
        const result = await (0, login_1.login)(body);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.postLogin = postLogin;
const putRegister = async (req, res, next) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
        if (!errors.isEmpty()) {
            throw (0, errorFormatter_1.createError)(422, "Validation Error", errors
                .array()
                .map(({ msg }) => " " + msg)
                .toString()
                .trim());
        }
        const registerBody = req.body;
        const result = await (0, register_1.register)(registerBody);
        return res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.putRegister = putRegister;
//# sourceMappingURL=authController.js.map