import { Project } from "../models/Project.js";

export const newProject = async (req, res) => {
  if (!req.body)
    return res.status(400).json({ message: "Body cannot be empty" });

  try {
    Object.assign(req.body, { id: req.user._id });
    const project = await Project.create(req.body);

    res.status(201).json({ message: "project successfully created", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
