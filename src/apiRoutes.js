const express = require('express');
const router = express.Router();
const FileRepository = require('./repositories/fileRepository');

const repository = new FileRepository('data/data.txt');

router.post('/data', (req, res) => {
  const jsonData = req.body;
  repository.save(jsonData);
  res.status(201).json({ message: 'Data saved successfully!' });
});

router.get('/data', (req, res) => {
  repository.getAll((data) => {
    res.json(data);
  });
});

module.exports = router;