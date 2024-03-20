import express from 'express'
import dotenv from 'dotenv'
import { logger } from './loggerMiddleware.js'
import { authorRoute } from './authorRouter.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(logger)
app.use('/authors', authorRoute)
app.get('/', (req, res) => {
  res.send('Express server is running!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
