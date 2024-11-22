import { Router } from 'express'
import * as controller from '../controllers/product.controller'

const productRouter = Router()

productRouter.get('/', async (req, res) => {
  const products = await controller.get()
  products ? res.json(products) : res.status(204).json()
})

export default productRouter
