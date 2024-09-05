"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = deleteCategory;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Category_1 = require("../../models/Category");
const Product_1 = require("../../models/Product");
const errorFormatter_1 = require("../../utils/errorFormatter");
async function deleteCategory(_id) {
    const foundProdCateg = await Category_1.Category.findById(_id);
    if (!foundProdCateg) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.globalNotFound.title, statusMessages_1.statusMessages.globalNotFound.message);
    }
    const productsExistForCategory = await Product_1.Product.findOne({ category: _id });
    if (!productsExistForCategory) {
        await Category_1.Category.findByIdAndDelete(_id);
        const result = statusMessages_1.statusMessages.deleteSuccess.message;
        return { result };
    }
    else if (productsExistForCategory) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.deleteFailure.title, statusMessages_1.statusMessages.deleteFailure.message +
            " Products found. Empty the category first, then try again.");
    }
}
//# sourceMappingURL=deleteCategory.js.map