import { model, Schema } from "mongoose";

const UserSignupSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

//.model() create a copy of schema(replicate schema)
//instance of model is called document (UserModel of instace would be document)
export const UserModel = model("UserModelssecond", UserSignupSchema);
