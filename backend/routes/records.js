const express = require('express');

const {
  getRecords,
  getRecord,
  createRecord,
  deleteRecord,
  updateRecord,
} = require('../controllers/recordController');

const router = express.Router();

router.get('/', getRecords);

router.get('/:id', getRecord);

router.post('/', createRecord);

router.delete('/:id', deleteRecord);

router.patch('/:id', updateRecord);

module.exports = router;
