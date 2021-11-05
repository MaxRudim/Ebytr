const Service = require('../services/todo');

const createController = async (req, res) => {
  const { task } = req.body;
  const { id: userId } = req.user;
  const { status, data, message } = await Service.createService({ task, userId });

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const findByIdController = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Service.findByIdService(id);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const getAllController = async (_req, res) => {
  const { status, data } = await Service.getAllService();

  res.status(status).json(data);
};

const updateController = async (req, res) => {
  const { task, id } = req.body;
  const { status, data, message } = await Service.updateService(task, id);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const removeController = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Service.removeService(id);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  createController,
  findByIdController,
  getAllController,
  updateController,
  removeController,
};
