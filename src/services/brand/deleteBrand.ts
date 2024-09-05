import { statusCodes } from "../../helpers/statusCodes";
import { statusMessages } from "../../helpers/statusMessages";
import { Brand } from "../../models/Brand";
import { Product } from "../../models/Product";
import { createError } from "../../utils/errorFormatter";

export async function deleteBrand(_id: string) {
    const foundBrand = await Brand.findById(_id);

    if (!foundBrand) {
        throw createError(
            statusCodes.badRequest,
            statusMessages.globalNotFound.title,
            statusMessages.globalNotFound.message
        );
    }

    const productsExistForBrand = await Product.findOne({ brand: _id });

    if (!productsExistForBrand) {
        await Brand.findByIdAndDelete(_id);

        const result = statusMessages.deleteSuccess.message;

        return { result };
    } else if (productsExistForBrand) {
        throw createError(
            statusCodes.badRequest,
            statusMessages.deleteFailure.title,
            statusMessages.deleteFailure.message + " Products found..."
        );
    }
}
