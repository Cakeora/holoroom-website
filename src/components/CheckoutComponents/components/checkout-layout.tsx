import { ReactNode } from 'react'
import { Logo } from './logo'
import { OrderSummary } from './order-summary'
import { MobileOrderSummary } from './mobile-order-summary'

interface CheckoutLayoutProps {
  children: ReactNode
  currentStep: 'information' | 'shipping' | 'payment' | 'thank-you'
}

export function CheckoutLayout({ children, currentStep }: CheckoutLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <MobileOrderSummary />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
          <div className="py-6 sm:py-12">
            <div className="mb-6 sm:mb-8">
              <Logo />
            </div>
            
            <nav className="mb-6 sm:mb-8 overflow-x-auto">
              <ol className="flex min-w-full items-center space-x-4 text-xs sm:text-sm whitespace-nowrap">
                <li className="flex items-center">
                  <a href="/cart" className="text-muted-foreground hover:text-primary">Cart</a>
                  <svg className="h-4 w-4 mx-2" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth={2} />
                  </svg>
                </li>
                <li className={`flex items-center ${currentStep === 'information' ? 'text-primary' : 'text-muted-foreground'}`}>
                  Information
                  <svg className="h-4 w-4 mx-2" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth={2} />
                  </svg>
                </li>
                <li className={`flex items-center ${currentStep === 'shipping' ? 'text-primary' : 'text-muted-foreground'}`}>
                  Shipping
                  <svg className="h-4 w-4 mx-2" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth={2} />
                  </svg>
                </li>
                <li className={`flex items-center ${currentStep === 'payment' ? 'text-primary' : 'text-muted-foreground'}`}>
                  Payment
                </li>
              </ol>
            </nav>

            {children}
          </div>

          <div className="hidden lg:block py-12">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

