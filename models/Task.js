import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, "title required"],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["To Do", "In progress", "Done"],
    default: "To Do",
  },
});

export const Task = model("Task", TaskSchema);
