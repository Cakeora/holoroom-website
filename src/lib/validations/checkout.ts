import * as z from "zod"

export const informationSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  address: z.string().min(1),
  apartment: z.string().optional(),
  city: z.string().min(1),
  country: z.string().min(1),
  state: z.string().min(1),
  postalCode: z.string().min(1),
  phone: z.string().min(1),
  saveInformation: z.boolean().default(false)
})

export const shippingSchema = z.object({
  method: z.enum(["standard", "express"]),
})

export const paymentSchema = z.object({
  method: z.enum(["card", "paypal", "apple"]),
  savePayment: z.boolean().default(false),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvc: z.string().optional(),
})

export type InformationInput = z.infer<typeof informationSchema>
export type ShippingInput = z.infer<typeof shippingSchema>
export type PaymentInput = z.infer<typeof paymentSchema> 