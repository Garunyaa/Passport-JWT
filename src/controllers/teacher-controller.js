import { Teacher } from "../models/teacher-model";
import { Student } from "../models/student-model";

export const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    if (!teacher) {
      res.status(404).send("Teacher not found");
    } else {
      res.status(201).json(teacher);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      res.status(404).send({ error: "Teacher Not Found" });
    } else {
      res.status(201).json(teacher);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateMarks = async (req, res) => {
  const { marks } = req.body;
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    } else {
      student.marks = marks;
      student.calculation.total =
        marks.sub1 + marks.sub2 + marks.sub3 + marks.sub4 + marks.sub5;
      student.calculation.average = student.calculation.total / 5;
      student.calculation.percentage = (student.calculation.total / 500) * 100;
      await student.save();
      return res.send(student);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMarks = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    } else {
      return res.json([student.marks, student.calculation]);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server error" });
  }
};
