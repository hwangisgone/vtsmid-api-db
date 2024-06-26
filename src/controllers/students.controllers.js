import { 
	queryListStudents,
	queryCreateStudent,
	queryGetStudent,
	queryUpdateStudent,
	queryDeleteStudent
} from '../models/students.models.js'

export const listStudents = async (req, res, next) => {
	try {
		const resp = await queryListStudents();
		res.status(200).json(resp);

	} catch (err) {
		return next(err);
	}
}

export const createStudent = async (req, res, next) => {
	try {
		const resp = await queryCreateStudent(req.body);
		res.status(200).json(resp);

	} catch (err) {
		return next(err);
	}
}

export const getStudent = async (req, res, next) => {
	try {
		const resp = await queryGetStudent(parseInt(req.params.id));
		res.status(200).json(resp);

	} catch (err) {
		return next(err);
	}
}

export const updateStudent = async (req, res, next) => {
	try {
		const resp = await queryUpdateStudent(parseInt(req.params.id), req.body);
		res.status(200).json(resp);

	} catch (err) {
		return next(err);
	}
}

export const deleteStudent = async (req, res, next) => {
	try {
		const resp = await queryDeleteStudent(parseInt(req.params.id));
		res.status(200).json(resp);

	} catch (err) {
		return next(err);
	}
}