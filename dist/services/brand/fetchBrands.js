"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBrands = fetchBrands;
const statusCodes_1 = require("../../helpers/statusCodes");
const Brand_1 = require("../../models/Brand");
async function fetchBrands({ query }) {
    const { isInFooter } = query;
    let result;
    if (isInFooter === "true") {
        result = await Brand_1.Brand.find({ showInFooter: 1 });
    }
    else {
        result = await Brand_1.Brand.find();
    }
    const response = {
        message: statusCodes_1.statusCodes.readSuccess,
        result,
    };
    return response;
}
//# sourceMappingURL=fetchBrands.js.map