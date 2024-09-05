"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockPayment = void 0;
const Transaction_1 = require("../../models/Transaction");
const User_1 = require("../../models/User");
const errorFormatter_1 = require("../../utils/errorFormatter");
const mockPayment = async (body, userId) => {
    const { amount, type, description } = body;
    if (!userId || !amount || !type || !description) {
        throw (0, errorFormatter_1.createError)(400, "Bad request", "All fields are required.");
    }
    if (type !== "credit" && type !== "debit") {
        throw (0, errorFormatter_1.createError)(400, "Bad request", "Invalid transaction type.");
    }
    const user = await User_1.User.findById(userId);
    if (!user) {
        throw (0, errorFormatter_1.createError)(400, "Bad request", "User not found.");
    }
    let newBalance = user.walletBalance;
    if (type === "credit") {
        newBalance += amount;
    }
    else {
        if (user.walletBalance < amount) {
            throw (0, errorFormatter_1.createError)(400, "Bad request", "Insufficient funds.");
        }
        newBalance -= amount;
    }
    user.walletBalance = newBalance;
    await user.save();
    const transaction = new Transaction_1.Transaction({
        userId,
        amount,
        type,
        description,
    });
    await transaction.save();
    const message = "Payment processed successfully.";
    return {
        message,
        newBalance,
    };
};
exports.mockPayment = mockPayment;
//# sourceMappingURL=mockPayment.js.map