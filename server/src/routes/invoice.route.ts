import { Router } from 'express'
import * as controller from '../controllers/invoice.controller'
import { Invoice } from '../models/invoice'

const invoiceRouter = Router()

invoiceRouter.get('/', async (req, res) => {
  try {
    const invoices = await controller.get()
    invoices.length > 0 ? res.json(invoices) : res.status(204).json()
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

invoiceRouter.post('/', async (req, res) => {
  const invoice: Invoice = req.body
  try {
    res.json(await controller.create(invoice))
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      res.status(400).send(error.message)
    } else {
      res.status(500).send('Internal Server Error')
    }
  }
})

export default invoiceRouter
