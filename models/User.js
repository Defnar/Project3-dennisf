import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username required"],
      minLength: 6,
    },
    password: {
      type: String,
      required: [true, "password required"],
      minLength: 8,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email required"],
      match: [/.+\@.+\..+/, "please provide a valid email"],
    },
  },
);

UserSchema.set("toJSON", {
    transform: (doc, ret) => {
        delete ret.password;
    }
})

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = model("User", UserSchema);
