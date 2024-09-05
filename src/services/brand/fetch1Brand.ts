import { statusCodes } from "../../helpers/statusCodes";
import { statusMessages } from "../../helpers/statusMessages";
import { Brand } from "../../models/Brand";
import { createError } from "../../utils/errorFormatter";

export async function getSingleBrand(_id: any) {
    const result = await Brand.findById(_id);

    if (!result) {
        throw createError(
            statusCodes.badRequest,
            statusMessages.globalNotFound.title,
            statusMessages.globalNotFound.message
        );
    }

    return { result };
}
