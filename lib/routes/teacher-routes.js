"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _teacherController = require("../controllers/teacher-controller");
var _passport = _interopRequireDefault(require("../helper/passport"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

// Teacher Routes
router.post("/", _passport["default"], _teacherController.createTeacher);
router.get("/", _passport["default"], _teacherController.getAllTeachers);
router.get("/:id", _passport["default"], _teacherController.getTeacherById);
router.put("/:id", _passport["default"], _teacherController.updateTeacher);
router["delete"]("/:id", _passport["default"], _teacherController.deleteTeacher);
router.patch("/:id", _passport["default"], _teacherController.updateMarks);
router.get("/:id/marks", _passport["default"], _teacherController.getMarks);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=teacher-routes.js.map