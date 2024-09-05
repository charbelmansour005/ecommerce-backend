"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Cart_1 = require("../../models/Cart");
const errorFormatter_1 = require("../../utils/errorFormatter");
const statusMessages_1 = require("../../helpers/statusMessages");
const addToCartService = async (userId, productId, quantity) => {
    if (!userId || !productId || !quantity) {
        throw (0, errorFormatter_1.createError)(400, statusMessages_1.statusMessages.createFailure.title, "User, product or quantity are missing.");
    }
    const userObjectId = new mongoose_1.default.Types.ObjectId(userId);
    const productObjectId = new mongoose_1.default.Types.ObjectId(productId);
    const cart = await Cart_1.Cart.findOne({ userId: userObjectId });
    if (!cart) {
        const newCart = new Cart_1.Cart({
            userId: userObjectId,
            items: [{ productId: productObjectId, quantity }],
        });
        return newCart.save();
    }
    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productObjectId.toString());
    if (itemIndex > -1) {
        // if the product was found in the cart
        cart.items[itemIndex].quantity += quantity;
    }
    else {
        cart.items.push({ productId: productObjectId, quantity });
    }
    await cart.save();
    const message = "Added to Cart successfully.";
    return {
        message,
    };
};
exports.addToCartService = addToCartService;
//# sourceMappingURL=addToCart.js.map