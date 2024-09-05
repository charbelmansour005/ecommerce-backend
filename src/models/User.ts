import { Document, Schema, model } from "mongoose";

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    walletBalance?: number;
    password: string;
    isBanned: boolean;
    logoutAll: boolean;
    role: string;
}

const UserSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
    },

    lastName: {
        type: String,
        required: false,
    },

    email: { type: String, required: true, unique: true, lowercase: true },

    walletBalance: { type: Number, default: 0 },

    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: 3,
    },

    isBanned: {
        type: Boolean,
        default: false,
    },

    logoutAll: {
        type: Boolean,
        required: false,
    },

    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
});

const User = model<IUser>("User", UserSchema);

export { User, IUser };
