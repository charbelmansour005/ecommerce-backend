"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../controllers/paymentController");
const isAuth_1 = require("../middleware/isAuth");
const router = (0, express_1.Router)();
router.post("/payment", isAuth_1.isAuth, paymentController_1.postMockPayment);
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map