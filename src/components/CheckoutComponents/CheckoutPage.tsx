'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckIcon } from 'lucide-react'
import { CheckoutLayout } from './components/checkout-layout'
import { InformationStep } from './components/information-step'
import { ShippingStep } from './components/shipping-step'
import { PaymentStep } from './components/payment-step'
import { LoadingSpinner } from './components/loading-spinner'
import type { InformationInput, ShippingInput, PaymentInput } from '../../lib/validations/checkout'
import { useNavigate } from 'react-router-dom'

export type CheckoutData = {
  information?: InformationInput
  shipping?: ShippingInput
  payment?: PaymentInput
}

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState<'information' | 'shipping' | 'payment'>('information')
  const [isLoading, setIsLoading] = useState(false)
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false)
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({})

  const handleStepChange = (nextStep: typeof step) => {
    setIsLoading(true)
    setTimeout(() => {
      setStep(nextStep)
      setIsLoading(false)
    }, 1000)
  }

  const handlePaymentSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsPaymentConfirmed(true)
      setIsLoading(false)
      // Navigate to thank you page after payment confirmation
      setTimeout(() => {
        navigate('/thank-you', { state: { checkoutData } })
      }, 2000)
    }, 2000)
  }

  const updateCheckoutData = (stepData: Partial<CheckoutData>) => {
    setCheckoutData(prev => ({ ...prev, ...stepData }))
  }

  return (
    <CheckoutLayout currentStep={step}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-[60vh] items-center justify-center"
          >
            <LoadingSpinner />
          </motion.div>
        ) : isPaymentConfirmed ? (
          <motion.div
            key="payment-confirmed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex h-[60vh] items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
              >
                <CheckIcon className="h-8 w-8 text-green-600" />
              </motion.div>
              <h2 className="text-2xl font-semibold">Payment Confirmed</h2>
              <p className="text-muted-foreground">Preparing your order...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 'information' && (
              <InformationStep 
                defaultValues={checkoutData.information}
                onSubmit={(data) => {
                  updateCheckoutData({ information: data })
                  handleStepChange('shipping')
                }} 
              />
            )}
            {step === 'shipping' && (
              <ShippingStep
                defaultValues={checkoutData.shipping}
                onSubmit={(data) => {
                  updateCheckoutData({ shipping: data })
                  handleStepChange('payment')
                }}
                onBack={() => handleStepChange('information')}
              />
            )}
            {step === 'payment' && (
              <PaymentStep
                defaultValues={checkoutData.payment}
                onSubmit={(data) => {
                  updateCheckoutData({ payment: data })
                  handlePaymentSubmit()
                }}
                onBack={() => handleStepChange('shipping')}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </CheckoutLayout>
  )
} 