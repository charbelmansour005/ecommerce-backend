"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cartController_1 = require("../controllers/cartController");
const isAuth_1 = require("../middleware/isAuth");
const router = (0, express_1.Router)();
router.post("/cart", isAuth_1.isAuth, cartController_1.addToCart);
exports.default = router;
//# sourceMappingURL=cartRoutes.js.map