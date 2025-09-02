import { Schema, model } from "mongoose";

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  description: {
    type: String,
    required: [true, "description required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "missing user id"],
  },
});

export const Project = model("Project", ProjectSchema);
