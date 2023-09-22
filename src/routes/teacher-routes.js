import express from "express";
import {
  createTeacher,
  getTeacherById,
  updateMarks,
  getMarks,
} from "../controllers/teacher-controller";

const router = express.Router();

// Teacher Routes
router.post("/create", createTeacher);
router.get("/:id", getTeacherById);
router.patch("/:id", updateMarks);
router.get("/:id/marks", getMarks);

export default router;
