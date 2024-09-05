"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = void 0;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Cart_1 = require("../../models/Cart");
const errorFormatter_1 = require("../../utils/errorFormatter");
const removeFromCart = async (userId, productId) => {
    const cart = await Cart_1.Cart.findOne({ userId });
    if (!cart) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.notFound, statusMessages_1.statusMessages.globalNotFound.title, statusMessages_1.statusMessages.globalNotFound.message);
    }
    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
    await cart.save();
    const result = statusMessages_1.statusMessages.deleteSuccess.title;
    return {
        result,
    };
};
exports.removeFromCart = removeFromCart;
//# sourceMappingURL=removeFromCart.js.map