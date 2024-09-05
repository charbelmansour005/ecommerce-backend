import { Document, Schema, model } from "mongoose";

interface IBrand extends Document {
    brandName: string;
    brandLogo: string;
    showInFooter?: number;
    isDeleted: number;
}

const BrandSchema: Schema = new Schema(
    {
        brandName: {
            type: String,
            required: [true, "Please enter the brand's name"],
        },
        brandLogo: {
            type: String,
            required: [true, "Please enter the brand's logo"],
        },
        showInFooter: {
            type: Number,
            default: 1,
        },
        isDeleted: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const Brand = model<IBrand>("Brand", BrandSchema);

export { Brand, IBrand };
