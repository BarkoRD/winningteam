import { Router } from 'express'
import * as controller from '../controllers/invoice.controller'

const invoiceRouter = Router()

invoiceRouter.get('/', async (req, res) => {
  res.json(await controller.get())
})

export default invoiceRouter
