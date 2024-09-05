"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBrand = addBrand;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Brand_1 = require("../../models/Brand");
const errorFormatter_1 = require("../../utils/errorFormatter");
async function addBrand(BrandData) {
    const { brandName, brandLogo } = BrandData;
    if (!brandName || !brandLogo) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.unprocessableEntity, statusMessages_1.statusMessages.unprocessableEntity.title, statusMessages_1.statusMessages.unprocessableEntity.message);
    }
    const brand = new Brand_1.Brand({
        brandName,
        brandLogo,
    });
    const result = await brand.save();
    return {
        result,
    };
}
//# sourceMappingURL=addBrand.js.map