"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryValidations_1 = require("../validations/categoryValidations");
const isAuth_1 = require("../middleware/isAuth");
const categoryController_1 = require("../controllers/categoryController");
const router = (0, express_1.Router)();
router
    .post("/category", categoryValidations_1.prodCategoryValidations, isAuth_1.isAuth, categoryController_1.addCategoryController)
    .get("/category", categoryController_1.fetchCategoriesController)
    .put("/category/:id", categoryValidations_1.prodCategoryValidations, isAuth_1.isAuth, categoryController_1.updateCategoryController)
    .delete("/category/:id", isAuth_1.isAuth, categoryController_1.deleteCategoryController)
    .get("/category/:id", categoryController_1.fetch1CategoryController);
exports.default = router;
//# sourceMappingURL=categoryRoutes.js.map