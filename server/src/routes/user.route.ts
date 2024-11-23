import { Router } from 'express'
import * as controller from '../controllers/user.controller'
import { User } from '../models/user'

const userRouter = Router()

userRouter.get('/', async (req, res) => {
  res.json(await controller.get())
})

userRouter.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const user = await controller.getOne(id)
  if (!user) res.status(204).json({ message: 'User not found' })
  else res.json(user)
})

userRouter.post('/', async (req, res) => {
  const user: User = req.body
  res.json(await controller.create(user))
})

userRouter.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const user: User = req.body
  res.json(await controller.update(id, user))
})

userRouter.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  res.json(await controller.remove(id))
})

export default userRouter
