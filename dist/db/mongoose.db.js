"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
const mongoose_1 = require("mongoose");
const variables_1 = require("../helpers/variables");
const connectMongoDB = async (app) => {
    try {
        app.listen(variables_1.variables.PORT);
        (0, mongoose_1.set)("strictQuery", false);
        await (0, mongoose_1.connect)(variables_1.variables.MONGO_URI);
        console.log("MongoDB Connected!");
        console.log("listening on: ", variables_1.variables.PORT);
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectMongoDB = connectMongoDB;
//
//# sourceMappingURL=mongoose.db.js.map