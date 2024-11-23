import { Invoice } from './invoice'
import { UserRole } from './userRole'

export interface User {
  id: number
  username: string
  role: UserRole
  invoices: Invoice[]
}
