"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _express = _interopRequireDefault(require("express"));
var _studentRoutes = _interopRequireDefault(require("./routes/student-routes"));
var _teacherRoutes = _interopRequireDefault(require("./routes/teacher-routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require("dotenv").config();
var app = (0, _express["default"])();
var port = process.env.PORT || 3000;

// Connect to MongoDB
_mongoose["default"].connect("mongodb://localhost:27017/Management", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("DB Connected");
})["catch"](function (error) {
  console.log("DB Connection error", error);
});

//   Middleware
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));

// Routes
app.use("/api/students", _studentRoutes["default"]);
app.use("/api/teachers", _teacherRoutes["default"]);
app.use(function (req, res, next) {
  return res.status(404).send("Requested route not found");
});

// Starting the server
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
//# sourceMappingURL=index.js.map