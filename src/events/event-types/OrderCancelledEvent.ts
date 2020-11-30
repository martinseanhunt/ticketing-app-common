import { Subjects } from '../Subjects'
import { OrderStatus } from '../types/OrderStatus'

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled
  data: {
    id: string
    status: OrderStatus
    userId: string
    version: number
    ticket: {
      id: string
    }
  }
}
