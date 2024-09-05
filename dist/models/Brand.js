"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const mongoose_1 = require("mongoose");
const BrandSchema = new mongoose_1.Schema({
    brandName: {
        type: String,
        required: [true, "Please enter the brand's name"],
    },
    brandLogo: {
        type: String,
        required: [true, "Please enter the brand's logo"],
    },
    showInFooter: {
        type: Number,
        default: 1,
    },
    isDeleted: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
const Brand = (0, mongoose_1.model)("Brand", BrandSchema);
exports.Brand = Brand;
//# sourceMappingURL=Brand.js.map