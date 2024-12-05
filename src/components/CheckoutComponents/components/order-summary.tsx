import { Button } from './ui/button'
import { Input } from './ui/input'
import { CartItem } from '../../../types/cart'

interface OrderSummaryProps {
  items: CartItem[]
  total: number
}

export function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <div className="bg-muted/50 rounded-lg p-6">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-0 right-0 bg-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {item.quantity}
                </div>
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="space-y-1.5 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${total.toFixed(2)}</span>
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

