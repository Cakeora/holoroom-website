'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { OrderSummary } from './order-summary'

export function MobileOrderSummary() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden border-b">
      <div className="flex items-center justify-between p-4">
        <Button
          variant="ghost"
          className="flex items-center gap-2 p-0 font-normal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <>
              Hide order summary <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show order summary <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
        <span className="font-medium">$254.88</span>
      </div>
      {isOpen && (
        <div className="border-t p-4">
          <OrderSummary />
        </div>
      )}
    </div>
  )
}

