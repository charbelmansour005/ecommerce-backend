"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBrand = updateBrand;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Brand_1 = require("../../models/Brand");
const errorFormatter_1 = require("../../utils/errorFormatter");
async function updateBrand(_id, brandData) {
    const { brandName, brandLogo, showInFooter } = brandData;
    if (!brandName && !brandLogo && !showInFooter) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.unprocessableEntity, statusMessages_1.statusMessages.unprocessableEntity.title, statusMessages_1.statusMessages.unprocessableEntity.message);
    }
    const foundBrand = await Brand_1.Brand.findById(_id);
    if (!foundBrand) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.globalNotFound.title, statusMessages_1.statusMessages.globalNotFound.message);
    }
    if (brandName) {
        foundBrand.brandName = brandName;
    }
    if (showInFooter) {
        foundBrand.showInFooter = showInFooter;
    }
    await foundBrand.save();
    const result = statusMessages_1.statusMessages.updateSuccess.message;
    return {
        result,
    };
}
//# sourceMappingURL=updateBrand.js.map