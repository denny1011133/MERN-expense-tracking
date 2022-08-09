const Record = require('../models/recordModel');
const mongoose = require('mongoose');

const getRecords = async (req, res) => {
  const records = await Record.find({}).sort({ createdAt: -1 });

  res.status(200).json(records);
};

const getRecord = async (req, res) => {
  const { id } = req.params;
  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such record' });
  }

  const record = await Record.findById(id);

  if (!record) {
    return res.status(404).json({ error: 'No such record' });
  }

  res.status(200).json(record);
};

const createRecord = async (req, res) => {
  const { title, amount, type } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!amount) {
    emptyFields.push('amount');
  }
  if (!type) {
    emptyFields.push('type');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all fields', emptyFields });
  }
  try {
    const record = await Record.create({ title, amount, type });
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such record' });
  }

  const record = await Record.findOneAndDelete({ _id: id });

  if (!record) {
    return res.status(400).json({ error: 'No such record' });
  }

  res.status(200).json(record);
};

const updateRecord = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such record' });
  }

  const record = await Record.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(400).json({ error: 'No such record' });
  }

  res.status(200).json(record);
};

module.exports = {
  getRecords,
  getRecord,
  createRecord,
  deleteRecord,
  updateRecord,
};
