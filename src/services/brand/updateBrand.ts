import { statusCodes } from "../../helpers/statusCodes";
import { statusMessages } from "../../helpers/statusMessages";
import { Brand, IBrand } from "../../models/Brand";
import { createError } from "../../utils/errorFormatter";

export async function updateBrand(_id: string, brandData: IBrand) {
    const { brandName, brandLogo, showInFooter } = brandData;

    if (!brandName && !brandLogo && !showInFooter) {
        throw createError(
            statusCodes.unprocessableEntity,
            statusMessages.unprocessableEntity.title,
            statusMessages.unprocessableEntity.message
        );
    }

    const foundBrand = await Brand.findById(_id);

    if (!foundBrand) {
        throw createError(
            statusCodes.badRequest,
            statusMessages.globalNotFound.title,
            statusMessages.globalNotFound.message
        );
    }

    if (brandName) {
        foundBrand.brandName = brandName;
    }
    if (showInFooter) {
        foundBrand.showInFooter = showInFooter;
    }

    await foundBrand.save();
    const result = statusMessages.updateSuccess.message;
    return {
        result,
    };
}
