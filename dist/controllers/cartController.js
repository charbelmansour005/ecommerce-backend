"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromUserCart = exports.getCart = exports.addToCart = void 0;
const addToCart_1 = require("../services/cart/addToCart");
const getUserCart_1 = require("../services/cart/getUserCart");
const removeFromCart_1 = require("../services/cart/removeFromCart");
const statusCodes_1 = require("../helpers/statusCodes");
const addToCart = async ({ body, userId }, res, next) => {
    try {
        const { productId, quantity } = body;
        const result = await (0, addToCart_1.addToCartService)(userId, productId, quantity);
        res.status(statusCodes_1.statusCodes.readSuccess).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.addToCart = addToCart;
const getCart = async ({ userId }, res, next) => {
    try {
        const result = await (0, getUserCart_1.getCartByUser)(userId);
        res.status(statusCodes_1.statusCodes.readSuccess).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getCart = getCart;
const removeFromUserCart = async ({ userId, body }, res, next) => {
    try {
        const { productId } = body;
        const result = await (0, removeFromCart_1.removeFromCart)(userId, productId);
        res.status(statusCodes_1.statusCodes.deleteSuccess).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.removeFromUserCart = removeFromUserCart;
//# sourceMappingURL=cartController.js.map