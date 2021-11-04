const Model = require('../models/todo');
const joi = require('../../utils/validation');
const http = require('../../utils/http');

const createService = async (data) => {
  const { error } = joi.validateTask.validate(data);
  if (error) {
    return {
      status: http.bad_request_status,
      message: error.details[0].message,
    };
  }

  const task = await Model.create(data);
  return { status: http.ok_status, data: task };
};


const findByIdService = async (id) => {
  const task = await Model.findByIdModel(id);
  
  if (!task) {
    return {
      status: http.not_found_status,
      message: "Task not found",
    };
  }
  
  return { status: http.ok_status, data: task };
};

const getAllService = async () => {
  const task = await Model.getAllModel();
  return { status: http.ok_status, data: task };
};

const updateService = async (id, task) => {
  const updatedTask = await Model.updateModel(id, task);
  return { status: http.ok_status, data: updatedTask };
};

const removeSale = async (id) => {
  const task = await Model.findByIdModel(id);

  if (!task) {
    return {
      status: http.unprocessable_entity_status,
      message: "This task doesn't exist",
    };
  }

  const result = await Model.deleteModel(id);
  return { status: http.ok_status, data: result };
};

module.exports = {
  createService,
  findByIdService,
  getAllService,
  updateService,
  removeSale,
};
