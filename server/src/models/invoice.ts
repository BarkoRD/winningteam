import { InvoiceDetail } from './invoiceDetail'
import { PaymentType } from './paymentType'
import { User } from './user'

export interface Invoice {
  id: number
  userId: number
  date: Date
  total: number
  offer: number
  offerReason?: string
  paymentType: PaymentType
  user: User
  detail: InvoiceDetail[]
}
