"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCategory = addCategory;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Category_1 = require("../../models/Category");
const errorFormatter_1 = require("../../utils/errorFormatter");
async function addCategory(categoryData) {
    const { categoryName, orderNumber } = categoryData;
    if (!categoryName && !orderNumber) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.unprocessableEntity, statusMessages_1.statusMessages.unprocessableEntity.title, statusMessages_1.statusMessages.unprocessableEntity.message);
    }
    const productCategory = new Category_1.Category({
        categoryName,
        orderNumber,
    });
    const result = await productCategory.save();
    return {
        result,
    };
}
//# sourceMappingURL=addCategory.js.map