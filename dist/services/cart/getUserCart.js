"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartByUser = void 0;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Cart_1 = require("../../models/Cart");
const errorFormatter_1 = require("../../utils/errorFormatter");
const getCartByUser = async (userId) => {
    const result = await Cart_1.Cart.findOne({ userId }).populate("items.productId");
    if (!result) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.notFound, statusMessages_1.statusMessages.globalNotFound.title, statusMessages_1.statusMessages.globalNotFound.message);
    }
    return {
        result,
    };
};
exports.getCartByUser = getCartByUser;
//# sourceMappingURL=getUserCart.js.map