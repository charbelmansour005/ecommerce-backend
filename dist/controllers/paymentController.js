"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMockPayment = void 0;
const mockPayment_1 = require("../services/payments/mockPayment");
const postMockPayment = async (req, res, next) => {
    try {
        const body = req.body;
        const userId = req.userId;
        const result = await (0, mockPayment_1.mockPayment)(body, userId);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.postMockPayment = postMockPayment;
//# sourceMappingURL=paymentController.js.map