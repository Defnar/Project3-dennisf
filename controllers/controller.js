const create = (Model) => async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "Body cannot be empty" });

    const newModel = { ...req.body };

    if (req.project) newModel.project = req.project._id;

    const model = await Model.create(req.body);

    res.status(201).json({ message: `${Model} successfully created`, model });
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
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

const getOne = (Model) => async (req, res) => {
  try {
    if (req.task) res.json(req.task);
    else res.json(req.project);
  } catch (err) {
    res.status(500).json({ error: message.err });
    console.log(err);
  }
};
