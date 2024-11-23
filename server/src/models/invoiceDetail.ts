import { Invoice } from './Invoice'
import { Product } from './product'

export interface InvoiceDetail {
  id: number
  invoiceId: number
  productId: number
  quantity: number
  subtotal: number
  invoice: Invoice
  product: Product
}