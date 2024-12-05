'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from './ui/button'
import { OrderSummary } from './order-summary'
import { CartItem } from '../../../types/cart'

interface MobileOrderSummaryProps {
  items: CartItem[]
  total: number
}

export function MobileOrderSummary({ items, total }: MobileOrderSummaryProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between border-y p-4"
      >
        <span className="text-sm font-medium">Show order summary</span>
        <span className="text-sm font-medium">${total.toFixed(2)}</span>
      </button>
      {isOpen && (
        <div className="border-t p-4">
          <OrderSummary items={items} total={total} />
        </div>
      )}
    </div>
  )
}

