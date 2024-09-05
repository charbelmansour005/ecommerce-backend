"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const variables_js_1 = require("../../helpers/variables.js");
const User_js_1 = require("../../models/User.js");
const errorFormatter_js_1 = require("../../utils/errorFormatter.js");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { compare } = bcryptjs_1.default;
const { sign } = jsonwebtoken_1.default;
const login = async (loginBody) => {
    const { email, password } = loginBody;
    const user = await User_js_1.User.findOne({ email: email });
    if (!user) {
        throw (0, errorFormatter_js_1.createError)(401, "Not found", "A user with this email could not be found");
    }
    const isEqual = await compare(password, user.password);
    if (!isEqual) {
        throw (0, errorFormatter_js_1.createError)(401, "Invalid Credentials", "Wrong email or password");
    }
    await User_js_1.User.updateOne({ email: email });
    let loadedUser;
    loadedUser = user;
    const token = sign({
        email: loadedUser.email,
        userId: loadedUser._id.toString(),
    }, variables_js_1.variables.SECRET, { expiresIn: "1h" });
    return {
        token: token,
    };
};
exports.login = login;
//# sourceMappingURL=login.js.map