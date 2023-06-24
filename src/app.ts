import express from 'express'
import cors from 'cors'
import { routers } from './routers'
import { ErrorHandling } from './middleware/errorHandling'
const app = express()

app.use(express.json())
app.use(cors())
app.use(routers, ErrorHandling)

export default app