import { statusCodes } from "../../helpers/statusCodes";
import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

interface IResponse {
    message: number;
    result: [] | {};
}

export async function fetchCategories() {
    const categories = await Category.find();

    let response: IResponse | string = "";

    if (!categories) {
        response = {
            message: statusCodes.readSuccess,
            result: [],
        };

        return response;
    }

    const categoriesWithCounts = await Promise.all(
        categories.map(async (category) => {
            const productCount = await Product.countDocuments({
                category: category._id,
            });
            return {
                ...category.toObject(),
                productCount,
            };
        })
    );

    response = {
        message: statusCodes.readSuccess,
        result: categoriesWithCounts,
    };

    return response;
}
