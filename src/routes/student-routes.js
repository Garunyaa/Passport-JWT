import express from "express";
import {
  studentSignup,
  verifyOTP,
  studentLogin,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/student-controller";

const router = express.Router();

// Student Routes
router.post("/signUp", studentSignup);
router.post("/verify", verifyOTP);
router.post("/login", studentLogin);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
