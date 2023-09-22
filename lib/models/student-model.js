"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Student = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var studentSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  otp: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  marks: {
    sub1: Number,
    sub2: Number,
    sub3: Number,
    sub4: Number,
    sub5: Number
  },
  calculation: {
    total: Number,
    average: Number,
    percentage: Number
  }
});
var Student = _mongoose["default"].model("Student", studentSchema);
exports.Student = Student;
//# sourceMappingURL=student-model.js.map