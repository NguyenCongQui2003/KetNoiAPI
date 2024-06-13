const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:masv', studentController.getStudentById);
router.put('/students/:masv', studentController.updateStudent);
router.delete('/students/:masv', studentController.deleteStudent);

module.exports = router;
