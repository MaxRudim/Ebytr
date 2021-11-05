const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createModel = async (data) => {
  const db = await connection();
  const task = await db.collection('taskmanager')
    .insertOne({ ...data });
  return { _id: task.insertedId, data };
};

const findByIdModel = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const task = await db.collection('taskmanager').findOne({ _id: ObjectId(id) });
  return task;
};

const getAllModel = async () => {
  const db = await connection();
  const task = await db.collection('taskmanager').find({}).toArray();
  return task;
};

const updateModel = async (id, data) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('taskmanager')
    .updateOne({ _id: ObjectId(id) }, { $set: { ...data } });
  const updatedSales = await findByIdModel(id);
  return updatedSales;
};

const deleteModel = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('taskmanager')
    .deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  createModel,
  findByIdModel,
  getAllModel,
  updateModel,
  deleteModel,
};
