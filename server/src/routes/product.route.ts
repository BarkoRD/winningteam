import { Router } from 'express'
import * as controller from '../controllers/product.controller'

const productRouter = Router()

productRouter.get('/', async (req, res) => {
  res.json(await controller.get())
})

export default productRouter
