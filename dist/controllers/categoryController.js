"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch1CategoryController = exports.updateCategoryController = exports.deleteCategoryController = exports.fetchCategoriesController = exports.addCategoryController = void 0;
const express_validator_1 = require("express-validator");
const addCategory_1 = require("../services/category/addCategory");
const errorFormatter_1 = require("../utils/errorFormatter");
const statusCodes_1 = require("../helpers/statusCodes");
const statusMessages_1 = require("../helpers/statusMessages");
const fetchCategories_1 = require("../services/category/fetchCategories");
const deleteCategory_1 = require("../services/category/deleteCategory");
const fetch1Category_1 = require("../services/category/fetch1Category");
const updateCategory_1 = require("../services/category/updateCategory");
const errorFormatter = ({ msg }) => {
    return {
        msg,
    };
};
const addCategoryController = async (req, res, next) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
        if (!errors.isEmpty()) {
            throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.unprocessableEntity, statusMessages_1.statusMessages.unprocessableEntity.title, errors
                .array()
                .map((error) => " " + error.msg)
                .toString()
                .trim());
        }
        const data = req.body;
        const result = await (0, addCategory_1.addCategory)(data);
        return res.status(statusCodes_1.statusCodes.createSuccess).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.addCategoryController = addCategoryController;
const fetchCategoriesController = async (req, res, next) => {
    try {
        const result = await (0, fetchCategories_1.fetchCategories)();
        return res.status(statusCodes_1.statusCodes.readSuccess).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.fetchCategoriesController = fetchCategoriesController;
const deleteCategoryController = async ({ params }, res, next) => {
    try {
        const { id } = params;
        const result = await (0, deleteCategory_1.deleteCategory)(id);
        return res.status(statusCodes_1.statusCodes.deleteSuccess).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.deleteCategoryController = deleteCategoryController;
const fetch1CategoryController = async ({ params }, res, next) => {
    try {
        const { id } = params;
        const result = await (0, fetch1Category_1.fetch1Category)(id);
        return res.status(statusCodes_1.statusCodes.readSuccess).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.fetch1CategoryController = fetch1CategoryController;
const updateCategoryController = async (req, res, next) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
        if (!errors.isEmpty()) {
            throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.unprocessableEntity, statusMessages_1.statusMessages.unprocessableEntity.title, errors
                .array()
                .map((error) => " " + error.msg)
                .toString()
                .trim());
        }
        const id = req.params.id;
        const data = req.body;
        const result = await (0, updateCategory_1.updateCategory)(id, data);
        return res.status(statusCodes_1.statusCodes.updateSuccess).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.updateCategoryController = updateCategoryController;
//# sourceMappingURL=categoryController.js.map