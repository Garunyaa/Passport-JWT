"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Teacher = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var teacherSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  subject: {
    type: String,
    required: true
  }
});
var Teacher = _mongoose["default"].model("Teacher", teacherSchema);
exports.Teacher = Teacher;
//# sourceMappingURL=teacher-model.js.map