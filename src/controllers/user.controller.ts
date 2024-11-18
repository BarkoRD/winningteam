import { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function get() {
  return await prisma.user.findMany()
}

export async function getOne(id: number) {
  return await prisma.user.findUnique({
    where: { id }
  })
}

export async function create(user: User) {
  return await prisma.user.create({ data: user })
}

export async function update(id: number, user: User) {
  return await prisma.user.update({
    where: { id },
    data: user
  })
}

export async function remove(id: number) {
  return await prisma.user.delete({
    where: { id }
  })
}
