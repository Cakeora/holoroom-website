import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { shippingSchema, type ShippingInput } from "@/lib/validations/checkout"

interface ShippingStepProps {
  defaultValues?: ShippingInput
  onSubmit: (data: ShippingInput) => void
  onBack: () => void
}

export function ShippingStep({ defaultValues, onSubmit, onBack }: ShippingStepProps) {
  const form = useForm<ShippingInput>({
    resolver: zodResolver(shippingSchema),
    defaultValues: defaultValues || {
      method: "standard"
    }
  })

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
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Shipping Method</h2>
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="space-y-4"
                  >
                    <Label className="flex items-center justify-between rounded-lg border p-4 cursor-pointer [&:has(:checked)]:border-primary">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <span>Free Standard (7-10 business days)</span>
                      </div>
                      <span>Free</span>
                    </Label>
                    <Label className="flex items-center justify-between rounded-lg border p-4 cursor-pointer [&:has(:checked)]:border-primary">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ground" id="ground" />
                        <div>
                          <span>Ground (3-5 business days)</span>
                          <p className="text-sm text-muted-foreground">Free Shipping</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="line-through text-sm text-muted-foreground">$10.95</span>
                        <span className="block">Free</span>
                      </div>
                    </Label>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
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
            Return to information
          </Button>
          <Button type="submit">Continue to payment</Button>
        </div>
      </form>
    </Form>
  )
}

