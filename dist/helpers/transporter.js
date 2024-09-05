"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = require("nodemailer");
exports.transporter = (0, nodemailer_1.createTransport)({
    service: "gmail",
    auth: {
        user: "charbelmansour005@gmail.com",
        pass: "encxvodkkuczlxdv",
    },
});
//# sourceMappingURL=transporter.js.map