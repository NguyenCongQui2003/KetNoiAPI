const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  masv: { type: String, required: true, unique: true },
  ten: { type: String, required: true },
  tuoi: { type: Number, required: true },
  ngaysinh: { type: Date, required: true },
  trangthai: { type: String, required: true, enum: ['đang học', 'nghỉ học'] }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
