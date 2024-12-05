import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function OrderSummary() {
  return (
    <div className="bg-muted/50 rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative h-16 w-16 rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=100&width=100"
                alt="Lip Butter"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 right-0 bg-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
                1
              </div>
            </div>
            <div>
              <p className="font-medium">Lip Butter</p>
              <p className="text-sm text-muted-foreground">$20.00</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative h-16 w-16 rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=100&width=100"
                alt="Wet Shimmer Quad"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 right-0 bg-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
                9
              </div>
            </div>
            <div>
              <p className="font-medium">Wet Shimmer Quad</p>
              <p className="text-sm text-muted-foreground">$216.00</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center">
            <Input 
              placeholder="Discount code or gift card"
              className="flex-1 mr-2"
            />
            <Button variant="secondary">Apply</Button>
          </div>
        </div>

        <div className="space-y-1.5 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>$236.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Estimated taxes</span>
            <span>$18.88</span>
          </div>
          <div className="flex items-center justify-between border-t pt-4 font-medium">
            <span>Total</span>
            <span>$254.88 USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

