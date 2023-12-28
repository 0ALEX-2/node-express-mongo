const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};
const getUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};
const createUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};
const updateUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};
const deleteUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'User not found' });
};

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
