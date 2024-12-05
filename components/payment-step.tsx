import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Icons } from './icons'
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { paymentSchema, type PaymentInput } from "@/lib/validations/checkout"

interface PaymentStepProps {
  defaultValues?: PaymentInput
  onSubmit: (data: PaymentInput) => void
  onBack: () => void
}

export function PaymentStep({ defaultValues, onSubmit, onBack }: PaymentStepProps) {
  const form = useForm<PaymentInput>({
    resolver: zodResolver(paymentSchema),
    defaultValues: defaultValues || {
      paymentMethod: "card",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvc: "",
      billingType: "same",
      saveInfo: false
    }
  })

  const watchPaymentMethod = form.watch("paymentMethod")

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">Contact</p>
                <p className="text-sm text-muted-foreground">adhamcake@gmail.com</p>
              </div>
              <Button variant="link" className="text-primary">Change</Button>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between">
              <div>
                <p className="font-medium">Ship to</p>
                <p className="text-sm text-muted-foreground">
                  14 عثماسون - الشيخ زايد الاسماعيليه ثالث - الاسماعيلية, xsolsia, Ismailia AL 35004, United States
                </p>
              </div>
              <Button variant="link" className="text-primary">Change</Button>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between">
              <div>
                <p className="font-medium">Method</p>
                <p className="text-sm text-muted-foreground">Free Standard (7-10 business days) · Free</p>
              </div>
              <Button variant="link" className="text-primary">Change</Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Payment</h2>
          <p className="text-sm text-muted-foreground">All transactions are secure and encrypted.</p>
          
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-4"
                  >
                    <Label className="flex flex-col space-y-4 rounded-lg border p-4 cursor-pointer [&:has(:checked)]:border-primary">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <span>Credit card</span>
                        <div className="ml-auto flex flex-wrap items-center gap-2">
                          <Icons.visa className="h-6 w-auto" />
                          <Icons.mastercard className="h-6 w-auto" />
                          <Icons.amex className="h-6 w-auto" />
                          <Icons.discover className="h-6 w-auto" />
                        </div>
                      </div>
                      {watchPaymentMethod === "card" && (
                        <div className="space-y-4 pt-4">
                          <FormField
                            control={form.control}
                            name="cardNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Card number</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="cardName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name on card</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="expiryDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Expiration date (MM/YY)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="MM / YY" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="cvc"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Security code</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      )}
                    </Label>

                    <Label className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer [&:has(:checked)]:border-primary">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Icons.paypal className="h-6 w-auto" />
                    </Label>

                    <Label className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer [&:has(:checked)]:border-primary">
                      <RadioGroupItem value="afterpay" id="afterpay" />
                      <Icons.afterpay className="h-6 w-auto" />
                    </Label>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Billing Address</h2>
          <FormField
            control={form.control}
            name="billingType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-4"
                  >
                    <Label className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer [&:has(:checked)]:border-primary">
                      <RadioGroupItem value="same" id="same" />
                      <span>Same as shipping address</span>
                    </Label>
                    <Label className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer [&:has(:checked)]:border-primary">
                      <RadioGroupItem value="different" id="different" />
                      <span>Use a different billing address</span>
                    </Label>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Remember Me</h2>
          <FormField
            control={form.control}
            name="saveInfo"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm text-muted-foreground">
                  Save my information for a faster checkout
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="ghost"
            className="text-primary"
            onClick={onBack}
          >
            Return to shipping
          </Button>
          <Button type="submit">Pay now</Button>
        </div>
      </form>
    </Form>
  )
}

