"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _studentController = require("../controllers/student-controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

// Student Routes
router.post("/signUp", _studentController.studentSignup);
router.post("/verify", _studentController.verifyOTP);
router.post("/login", _studentController.studentLogin);
router.get("/", _studentController.getAllStudents);
router.get("/:_id", _studentController.getStudentById);
router.put("/:id", _studentController.updateStudent);
router["delete"]("/:id", _studentController.deleteStudent);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=student-routes.js.map