"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    // create these tables
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        refPath: "Category",
        required: [true, "Please enter a category"],
    },
    brand: {
        type: mongoose_1.Schema.Types.ObjectId,
        refPath: "Brand",
        required: [true, "Please enter a brand"],
    },
    skuNumber: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    description: {
        type: String,
        required: [true, "Please enter a description"],
    },
    shortDescription: {
        type: String,
        required: false,
    },
    thumbnailImage: {
        type: String,
        required: [true, "Please enter a thumbnail image"],
    },
    hoverImage: {
        type: String,
        required: [true, "Please enter a hover image"],
    },
    altImage: {
        type: String,
        required: false,
    },
    seoDescription: {
        type: String,
        required: false,
    },
    isFeatured: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
const Product = (0, mongoose_1.model)("Product", ProductSchema);
exports.Product = Product;
//# sourceMappingURL=Product.js.map