import express from 'express'
import userRouter from './user.route'
import productRouter from './product.route'
import invoiceRouter from './invoice.route'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'working' })
})

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/invoice', invoiceRouter)

export default router
