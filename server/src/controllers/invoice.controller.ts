import { PrismaClient } from '@prisma/client'
import { Invoice } from '../models/invoice'

const prisma = new PrismaClient()

export async function get() {
  return await prisma.invoice.findMany({ include: { detail: true } })
}

export async function create(invoice: Invoice) {
  return await prisma.$transaction(async (prisma) => {
    const newInvoice = await prisma.invoice.create({
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
      },
      include: { detail: true }
    })

    for (const item of invoice.detail) {
      const product = await prisma.product.update({
        where: { id: item.productId },
        data: {
          stock: {
            decrement: item.quantity
          }
        }
      })
      if (!product) throw new Error('Producto no encontrado')
      if (product.stock < 0)
        throw new Error(`No hay stock suficiente de ${product.name}`)
    }
    return newInvoice
  })
}
