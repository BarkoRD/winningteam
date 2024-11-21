import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function get() {
  return await prisma.invoice.findMany()
}