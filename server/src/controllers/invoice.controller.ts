import { PrismaClient } from '@prisma/client'
import { Invoice } from '../models/Invoice'

const prisma = new PrismaClient()

export async function get() {
  return await prisma.invoice.findMany({ include: { detail: true } })
}

export async function create(invoice: Invoice) {
  return await prisma.invoice.create({
    data: {
      userId: invoice.userId,
      offer: invoice.offer,
      total: invoice.total,
      paymentType: invoice.paymentType,
      offerReason: invoice.offerReason,
      detail: {
        createMany: {
          data: invoice.detail
        }
      }
    }
  })
}
