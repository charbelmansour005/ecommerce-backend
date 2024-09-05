"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCategories = fetchCategories;
const statusCodes_1 = require("../../helpers/statusCodes");
const Category_1 = require("../../models/Category");
const Product_1 = require("../../models/Product");
async function fetchCategories() {
    const categories = await Category_1.Category.find();
    let response = "";
    if (!categories) {
        response = {
            message: statusCodes_1.statusCodes.readSuccess,
            result: [],
        };
        return response;
    }
    const categoriesWithCounts = await Promise.all(categories.map(async (category) => {
        const productCount = await Product_1.Product.countDocuments({
            category: category._id,
        });
        return {
            ...category.toObject(),
            productCount,
        };
    }));
    response = {
        message: statusCodes_1.statusCodes.readSuccess,
        result: categoriesWithCounts,
    };
    return response;
}
//# sourceMappingURL=fetchCategories.js.map