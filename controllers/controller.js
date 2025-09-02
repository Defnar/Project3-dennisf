const create = (Model) => async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "Body cannot be empty" });

    const newModel = { ...req.body };

    if (req.project) newModel.project = req.project._id;

    const model = await Model.create(newModel);

    res.status(201).json({ message: `${Model.modelName} successfully created`, model });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

const getAll = (Model) => async (req, res) => {
  try {
    const search = req.project._id
      ? { project: req.project._id }
      : { user: req.user._id };
    const models = await Model.find(search);

    if (models.length === 0)
      return res.status(404).json({ message: "No resources found" });

    res.send(models);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

const getOne = (Model) => async (req, res) => {
  try {
    res.json(req[Model.modelName.toLowerCase()])
  } catch (err) {
    res.status(500).json({ error: message.err });
    console.log(err);
  }
};

const edit = (Model) => async (req, res) => {
    try {
        if (!req.body)
            return res.status(400).json({message: "Body cannot be empty"});

        const model = Object.assign(req.task || req.project, req.body);

        await model.save();
        res.json({message: `${Model.modelName} successfully updated`, model})
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err.message})
    }
}

const deleteOne = (Model) => async (req, res) => {
    try {
        await (req.task || req.project).deleteOne();
        res.json({ message: `${Model.modelName} successfully deleted`})
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err.message})
    }
};

export default {
    create,
    getAll,
    getOne,
    edit,
    deleteOne
}
