import { Subjects } from '../Subjects'

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated
  data: {
    orderId: string
    stripeId: string
    id: string
  }
}
