"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = updateCategory;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Category_1 = require("../../models/Category");
const errorFormatter_1 = require("../../utils/errorFormatter");
async function updateCategory(_id, data) {
    const { categoryName, orderNumber } = data;
    if (!categoryName && !orderNumber) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.unprocessableEntity, statusMessages_1.statusMessages.unprocessableEntity.title, statusMessages_1.statusMessages.unprocessableEntity.message);
    }
    const foundProdCategory = await Category_1.Category.findById(_id);
    if (!foundProdCategory) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.globalNotFound.title, statusMessages_1.statusMessages.globalNotFound.message);
    }
    if (orderNumber) {
        foundProdCategory.orderNumber = orderNumber;
    }
    if (categoryName) {
        foundProdCategory.categoryName = categoryName;
    }
    const result = await foundProdCategory.save();
    return {
        result,
    };
}
//# sourceMappingURL=updateCategory.js.map