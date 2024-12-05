import * as z from "zod"

export const informationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  marketing: z.boolean().optional(),
  sms: z.boolean().optional()
})

export const shippingSchema = z.object({
  method: z.enum(["standard", "ground"], {
    required_error: "Please select a shipping method",
  }),
})

export const paymentSchema = z.object({
  paymentMethod: z.enum(["card", "paypal", "afterpay"], {
    required_error: "Please select a payment method",
  }),
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  cardName: z.string().min(1, "Name on card is required"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Expiry date must be in MM/YY format"),
  cvc: z.string().regex(/^\d{3,4}$/, "CVC must be 3 or 4 digits"),
  billingType: z.enum(["same", "different"], {
    required_error: "Please select a billing address type",
  }),
  saveInfo: z.boolean().optional()
})

export type InformationInput = z.infer<typeof informationSchema>
export type ShippingInput = z.infer<typeof shippingSchema>
export type PaymentInput = z.infer<typeof paymentSchema>

