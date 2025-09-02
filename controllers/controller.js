const create = (Model) => async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "Body cannot be empty" });

    const newModel = {...req.body}

    
    if (req.project) newModel.project = req.project._id;

    const model = await Model.create(req.body)

    res.status(201).json({message: `${Model} successfully created`})
  } catch (err) {
    console.log(err);
    res.status(500).json({err: err.message});
  }
};
