import { Project } from "../models/Project.js";

const newProject = async (req, res) => {
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

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id });

    if (projects.length === 0)
      return res.json({ message: "No projects found" });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: message.err });
    console.log(err);
  }
};

const getProject = async (req, res) => {
    try {
        
    } catch (err) {

    }
}

export default { newProject, getAllProjects };
