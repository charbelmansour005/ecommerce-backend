import { statusCodes } from "../../helpers/statusCodes";
import { statusMessages } from "../../helpers/statusMessages";
import { Brand, IBrand } from "../../models/Brand";
import { createError } from "../../utils/errorFormatter";

export async function addBrand(BrandData: IBrand) {
    const { brandName, brandLogo } = BrandData;

    if (!brandName || !brandLogo) {
        throw createError(
            statusCodes.unprocessableEntity,
            statusMessages.unprocessableEntity.title,
            statusMessages.unprocessableEntity.message
        );
    }

    const brand = new Brand({
        brandName,
        brandLogo,
    });

    const result = await brand.save();

    return {
        result,
    };
}
