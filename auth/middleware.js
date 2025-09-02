import { Project } from "../models/Project.js";


export const authEditMiddleware = async (req, res, next) => {
   try {
        const project = await Project.findById(req.params.id);

        if (!project) 
            return res.status(404).json({message: "no project with this id found"})

        if (project.user != req.user._id) 
            return res.status(403).json({message: "unauthorized to access this project"})

        req.project = project
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message})
    }
}