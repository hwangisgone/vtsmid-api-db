import { 
	queryListStudents,
	queryCreateStudent,
	queryGetStudent,
	queryUpdateStudent,
	queryDeleteStudent
} from '../models/students.models.js'

export const listStudents = async (req, res) => {
	try {
		const resp = await queryListStudents();
		res.status(200).json(resp);

	} catch (err) {
		res.status(500).send(err);
	}
}

export const createStudent = (req, res) => {
	try {
		const resp = queryCreateStudent(req.body);
		res.status(200).json(resp);

	} catch (err) {
		res.status(500).send(err);
	}
}

export const getStudent = (req, res) => {
	try {
		const resp = queryGetStudent(parseInt(req.params.id));
		res.status(200).json(resp);

	} catch (err) {
		res.status(500).send(err);
	}
}

export const updateStudent = (req, res) => {
	try {
		const resp = queryUpdateStudent(parseInt(req.params.id), req.body);
		res.status(200).json(resp);

	} catch (err) {
		res.status(500).send(err);
	}
}

export const deleteStudent = (req, res) => {
	try {
		const resp = queryDeleteStudent(parseInt(req.params.id));
		res.status(200).json(resp);

	} catch (err) {
		res.status(500).send(err);
	}
}