"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
    },
    lastName: {
        type: String,
        required: false,
    },
    email: { type: String, required: true, unique: true, lowercase: true },
    walletBalance: { type: Number, default: 0 },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: 3,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },
    logoutAll: {
        type: Boolean,
        required: false,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.User = User;
//# sourceMappingURL=User.js.map