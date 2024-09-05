"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.banUserValidations = exports.changePasswordValidations = exports.registerValidations = void 0;
const express_validator_1 = require("express-validator");
const registerValidations = [
    (0, express_validator_1.check)("email")
        .isEmail()
        .withMessage("Invalid Email Format")
        .notEmpty()
        .withMessage("Email must not be empty")
        .toLowerCase()
        .trim(),
    (0, express_validator_1.check)("password")
        .isString()
        .withMessage("Password must be a string")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
        .withMessage("Password must contain 8 or more characters, with 1 upper case, 1 lower case and a special character")
        .notEmpty()
        .withMessage("Password must not be empty"),
    (0, express_validator_1.check)("firstName")
        .isString()
        .withMessage("First name must be a string")
        .notEmpty()
        .withMessage("First name must not be empty")
        .isLength({ min: 3, max: 30 })
        .withMessage("First name must be between 3 and 30 characters")
        .trim()
        .toLowerCase(),
    (0, express_validator_1.check)("lastName")
        .isString()
        .withMessage("Last name must be a string")
        .isLength({ min: 3, max: 30 })
        .withMessage("Last name must be between 3 and 30 characters")
        .trim()
        .toLowerCase()
        .optional(),
    (0, express_validator_1.check)("phoneNumber")
        .isNumeric()
        .withMessage("Phone number must be a number")
        .isLength({ max: 8 })
        .withMessage("Phone number must not exceed 8 numbers")
        .optional(),
];
exports.registerValidations = registerValidations;
const changePasswordValidations = [
    (0, express_validator_1.check)("newPassword")
        .isString()
        .withMessage("Password must be a string")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
        .withMessage("Password must contain 8 or more characters, with 1 upper case, 1 lower case and a special character")
        .notEmpty()
        .withMessage("Password must not be empty"),
    (0, express_validator_1.check)("email")
        .isString()
        .withMessage("Invalid email format")
        .isEmail()
        .withMessage("Invalid email address")
        .notEmpty()
        .withMessage("Email address required to change password"),
];
exports.changePasswordValidations = changePasswordValidations;
const banUserValidations = [
    (0, express_validator_1.check)("isBanned")
        .notEmpty()
        .withMessage("Please do not submit empty requests..."),
];
exports.banUserValidations = banUserValidations;
//# sourceMappingURL=authValidations.js.map