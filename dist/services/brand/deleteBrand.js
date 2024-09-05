"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBrand = deleteBrand;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Brand_1 = require("../../models/Brand");
const Product_1 = require("../../models/Product");
const errorFormatter_1 = require("../../utils/errorFormatter");
async function deleteBrand(_id) {
    const foundBrand = await Brand_1.Brand.findById(_id);
    if (!foundBrand) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.globalNotFound.title, statusMessages_1.statusMessages.globalNotFound.message);
    }
    const productsExistForBrand = await Product_1.Product.findOne({ brand: _id });
    if (!productsExistForBrand) {
        await Brand_1.Brand.findByIdAndDelete(_id);
        const result = statusMessages_1.statusMessages.deleteSuccess.message;
        return { result };
    }
    else if (productsExistForBrand) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.deleteFailure.title, statusMessages_1.statusMessages.deleteFailure.message + " Products found...");
    }
}
//# sourceMappingURL=deleteBrand.js.map