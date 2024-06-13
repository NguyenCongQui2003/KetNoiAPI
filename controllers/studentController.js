const Student = require('../models/studentModel');

// Tạo sinh viên mới
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Lấy danh sách tất cả sinh viên
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Lấy thông tin sinh viên theo mã sinh viên
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findOne({ masv: req.params.masv });
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Cập nhật thông tin sinh viên
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { masv: req.params.masv },
      req.body,
      { new: true, runValidators: true }
    );
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Xóa sinh viên
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ masv: req.params.masv });
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.status(200).send({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
