"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authValidations_1 = require("../validations/authValidations");
const router = (0, express_1.Router)();
router.put("/register", authValidations_1.registerValidations, authController_1.putRegister);
router.post("/login", authController_1.postLogin);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map