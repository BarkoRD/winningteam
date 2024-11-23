import { InvoiceDetail } from './invoiceDetail'
import { ProductType } from './productType'

export interface Product {
  id: number
  name: string
  price: number
  cost: number
  stock: number
  profit: number
  type: ProductType
  invoiceDetail: InvoiceDetail[]
}
