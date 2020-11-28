// possible states for orders
// We need to understand these states deeply as we're using them to handle
// a race condition with order creation and ticket reservation
export enum OrderStatus {
  // After the order has been created and the ticket
  // the customer is ordering has NOT YET been reserved
  Created = 'created',

  // If the ticket the user is trying to order has already been reserved
  // Or the user cancells the order
  // or the order expires  before payment is recieved
  Cancelled = 'cancelled',

  // Ticket is successfully reserved and waiting for the user to pay complete the order
  AwaitingPayment = 'awaiting:payment',

  // the payment was successful the ticket belongs to the user
  Complete = 'complete',
}
