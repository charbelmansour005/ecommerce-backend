"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prodCategoryValidations = void 0;
const express_validator_1 = require("express-validator");
const prodCategoryValidations = [
    (0, express_validator_1.check)("categoryName")
        .isString()
        .withMessage("Category name must be a string")
        .notEmpty()
        .withMessage("Category name must not be empty"),
];
exports.prodCategoryValidations = prodCategoryValidations;
//# sourceMappingURL=categoryValidations.js.map