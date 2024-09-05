import { statusCodes } from "../../helpers/statusCodes";
import { Brand } from "../../models/Brand";

export async function fetchBrands({ query }) {
    const { isInFooter } = query;

    let result: any;

    if (isInFooter === "true") {
        result = await Brand.find({ showInFooter: 1 });
    } else {
        result = await Brand.find();
    }

    const response = {
        message: statusCodes.readSuccess,
        result,
    };

    return response;
}
