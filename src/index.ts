import * as dotenv from "dotenv";
dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import { connectMongoDB } from "./db/mongoose.db";
import paymentRoutes from "./routes/paymentRoutes";
import authRoutes from "./routes/authRoutes";
import cartRoutes from "./routes/cartRoutes";

export interface IErrorResponse extends Error {
    status: number;
    data?: any;
}

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", paymentRoutes);
app.use("/api", cartRoutes);

app.use("*", (req: Request, res: Response) => {
    return res.status(404).json({ message: "Could not find Endpoint!" });
});

app.use(
    (
        error: IErrorResponse,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { message, status, data } = error;
        res.status(status || 404).json({
            message: message || "Internal server issues",
            data: data,
        });
    }
);

connectMongoDB(app);
//
