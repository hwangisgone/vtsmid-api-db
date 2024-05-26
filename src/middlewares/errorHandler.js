export function errorHandler(err, req, res, next) {
	const statusCode = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	console.log(err);
	res.status(statusCode).send({ ...err, message: message });
}