import express from 'express'
import cors from 'cors'

import studentRoutes from './routes/students.routes.js'
import { errorHandler } from './middlewares/errorHandler.js';

const app = express()
const port = 3000

/* Global middlewares */
app.use(cors())
app.use(express.json())

/* Routes */
app.use('/api/student', studentRoutes)

/* Error handling */
app.use(errorHandler)


/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))
}

export default app