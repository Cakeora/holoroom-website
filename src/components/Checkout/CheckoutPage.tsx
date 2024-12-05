import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckIcon } from 'lucide-react'
import { 
  CheckoutLayout,
  InformationStep,
  ShippingStep,
  PaymentStep,
  ThankYouStep,
  LoadingSpinner
} from '../CheckoutComponents'
import type { InformationInput, ShippingInput, PaymentInput } from '@/lib/validations/checkout'

type CheckoutData = {
  information?: InformationInput
  shipping?: ShippingInput
  payment?: PaymentInput
}

export default function CheckoutPage() {
  const location = useLocation()
  const cartData = location.state || { cartItems: [], cartTotal: 0 }
  const [step, setStep] = useState<'information' | 'shipping' | 'payment'>('information')
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({})

  return (
    <CheckoutLayout 
      currentStep={step}
      cartItems={cartData.cartItems}
      cartTotal={cartData.cartTotal}
    >
      {step === 'information' && (
        <InformationStep 
          onSubmit={(data) => {
            setCheckoutData(prev => ({ ...prev, information: data }))
            setStep('shipping')
          }} 
        />
      )}
      {/* Add other steps similarly */}
    </CheckoutLayout>
  )
} 