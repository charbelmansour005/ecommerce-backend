"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const errorFormatter_js_1 = require("../../utils/errorFormatter.js");
const User_js_1 = require("../../models/User.js");
const transporter_js_1 = require("../../helpers/transporter.js");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const { hash } = bcryptjs_1.default;
const register = async (registerBody) => {
    const { email, password, firstName, lastName } = registerBody;
    const user = await User_js_1.User.findOne({ email: email });
    if (user) {
        throw (0, errorFormatter_js_1.createError)(409, "Already exists", "A user with this email already exists");
    }
    const hashedPassword = await hash(password, 12);
    const authenticatedUser = new User_js_1.User({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword,
    });
    transporter_js_1.transporter.sendMail({
        to: email,
        from: "employees@node-complete.com",
        html: "<h1>Welcome! Thank you for choosing us.</h1>",
    });
    const result = await authenticatedUser.save();
    const registeredEmail = result.email;
    return {
        message: "Sign up success",
        email: registeredEmail,
    };
};
exports.register = register;
//# sourceMappingURL=register.js.map