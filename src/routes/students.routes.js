import express from "express";
import {
	listStudents,
	getStudent,
	createStudent,
	updateStudent,
	deleteStudent,
} from "../controllers/students.controllers.js";

const router = express.Router();

router.get("/", listStudents);

router.post("/", createStudent);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;