import {
  Invoice,
  InvoiceDetail,
  PaymentType,
  Prisma,
  PrismaClient,
  Product,
  ProducType,
  User,
  UserRole
} from '@prisma/client'
const prisma = new PrismaClient()

const users: User[] = [
  {
    id: 1,
    role: UserRole.OWNER,
    username: 'admin'
  },
  {
    id: 2,
    role: UserRole.EMPLOYEE,
    username: 'employee'
  },
  {
    id: 3,
    role: UserRole.EMPLOYEE,
    username: 'employee2'
  }
]

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    stock: 100,
    profit: new Prisma.Decimal(100),
    price: new Prisma.Decimal(1000),
    cost: new Prisma.Decimal(900),
    type: ProducType.Vaper
  },
  {
    id: 2,
    name: 'Product 2',
    stock: 200,
    profit: new Prisma.Decimal(200),
    price: new Prisma.Decimal(2000),
    cost: new Prisma.Decimal(1800),
    type: ProducType.Refrigerio
  }
]

const invoices: Invoice[] = [
  {
    id: 1,
    userId: 1,
    total: new Prisma.Decimal(1000),
    offer: new Prisma.Decimal(0),
    paymentType: PaymentType.Tarjeta,
    date: new Date(),
    offerReason: 'No offer'
  },
  {
    id: 2,
    userId: 2,
    total: new Prisma.Decimal(2000),
    offer: new Prisma.Decimal(100),
    paymentType: PaymentType.Efectivo,
    date: new Date(),
    offerReason: 'Employee discount'
  }
]

const invoiceDetails: InvoiceDetail[] = [
  {
    id: 1,
    invoiceId: 1,
    productId: 1,
    quantity: 10,
    subtotal: new Prisma.Decimal(1000)
  },
  {
    id: 2,
    invoiceId: 2,
    productId: 2,
    quantity: 20,
    subtotal: new Prisma.Decimal(2000)
  }
]

async function seed() {
  await prisma.invoiceDetail.deleteMany()
  await prisma.invoice.deleteMany()
  await prisma.product.deleteMany()
  await prisma.user.deleteMany()
  await prisma.user.createMany({ data: users })
  await prisma.product.createMany({ data: products })
  await prisma.invoice.createMany({ data: invoices })
  await prisma.invoiceDetail.createMany({ data: invoiceDetails })
}

seed()
  .then(() => {
    console.log('Database seeded')
  })
  .catch((error) => {
    console.error(error)
  })
