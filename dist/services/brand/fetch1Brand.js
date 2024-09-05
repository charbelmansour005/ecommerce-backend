"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleBrand = getSingleBrand;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Brand_1 = require("../../models/Brand");
const errorFormatter_1 = require("../../utils/errorFormatter");
async function getSingleBrand(_id) {
    const result = await Brand_1.Brand.findById(_id);
    if (!result) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.globalNotFound.title, statusMessages_1.statusMessages.globalNotFound.message);
    }
    return { result };
}
//# sourceMappingURL=fetch1Brand.js.map