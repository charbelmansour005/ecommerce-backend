import { set, connect } from "mongoose";
import { variables } from "../helpers/variables";

export const connectMongoDB = async (app: any) => {
  try {
    app.listen(variables.PORT);
    set("strictQuery", false);
    await connect(variables.MONGO_URI);
    console.log("MongoDB Connected!");
    console.log("listening on: ", variables.PORT);
  } catch (error) {
    console.log(error);
  }
};
//
