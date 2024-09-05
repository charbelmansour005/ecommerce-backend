"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch1Category = fetch1Category;
const statusCodes_1 = require("../../helpers/statusCodes");
const statusMessages_1 = require("../../helpers/statusMessages");
const Category_1 = require("../../models/Category");
const errorFormatter_1 = require("../../utils/errorFormatter");
async function fetch1Category(_id) {
    if (!_id) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.unprocessableEntity.title, statusMessages_1.statusMessages.unprocessableEntity.message);
    }
    const result = await Category_1.Category.findById(_id);
    if (!result) {
        throw (0, errorFormatter_1.createError)(statusCodes_1.statusCodes.badRequest, statusMessages_1.statusMessages.globalNotFound.title, statusMessages_1.statusMessages.globalNotFound.message);
    }
    return { result };
}
//# sourceMappingURL=fetch1Category.js.map