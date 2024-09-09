// routes/userRoutes.js
const express = require('express');
const { addUser } = require('../controllers/userController');

const router = express.Router();

// Định nghĩa route cho phương thức POST
router.post('/add-user', addUser);

module.exports = router;
