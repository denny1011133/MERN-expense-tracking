const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hi: 'hi' });
});

router.get('/:id', (req, res) => {});

router.post('/', (req, res) => {});

router.delete('/:id', (req, res) => {});

router.patch('/:id', (req, res) => {});

module.exports = router;
