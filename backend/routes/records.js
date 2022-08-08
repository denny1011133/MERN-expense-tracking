const express = require('express');
const Record = require('../models/recordModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hi: 'hi' });
});

router.get('/:id', (req, res) => {});

router.post('/', async (req, res) => {
  const { title, amount, type } = req.body;

  try {
    const record = await Record.create({ title, amount, type });
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {});

router.patch('/:id', (req, res) => {});

module.exports = router;
