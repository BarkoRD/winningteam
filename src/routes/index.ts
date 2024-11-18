import express from 'express'
import userRouter from './user.route'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'API Working' })
})

router.use('/user', userRouter)

export default router
