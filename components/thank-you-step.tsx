import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Printer } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function ThankYouStep() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
        >
          <Check className="h-8 w-8 text-green-600" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4 text-3xl font-bold tracking-tight"
        >
          Your Furniture is On The Way!
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground"
        >
          Welcome to Comfort Haven! Our goal is to bring comfort and style to your home. 
          We&apos;ll email your order confirmation to john@example.com. 
          Meanwhile, we&apos;ll start preparing your items for delivery.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          Order #FH123456
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm"
      >
        <h2 className="mb-4 sm:mb-6 text-lg font-semibold">Order Summary</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="relative h-16 w-16 flex-none rounded-lg bg-muted">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Modern Sofa"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate">Modern Leather Sofa</h3>
              <p className="text-sm text-muted-foreground">3-Seater, Caramel Brown</p>
            </div>
            <div className="text-right">
              <span className="font-medium">$1,299.00</span>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="relative h-16 w-16 flex-none rounded-lg bg-muted">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Coffee Table"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate">Artisan Coffee Table</h3>
              <p className="text-sm text-muted-foreground">Solid Oak, Natural Finish</p>
            </div>
            <div className="text-right">
              <span className="font-medium">$399.00</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$1,698.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>$49.99</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Taxes</span>
              <span>$135.84</span>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>$1,883.83 USD</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="rounded-lg border bg-card p-6 shadow-sm"
      >
        <h2 className="mb-4 text-lg font-semibold">Shipping Address</h2>
        <div className="text-sm text-muted-foreground">
          <p>John Smith</p>
          <p>123 Comfort Street</p>
          <p>Apt 4B</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="flex flex-col gap-4 sm:flex-row sm:justify-between"
      >
        <Button variant="outline" asChild>
          <Link href="/shop">
            Continue Shopping
          </Link>
        </Button>
        
        <Button
          variant="outline"
          onClick={() => window.print()}
        >
          <span className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Print Receipt
          </span>
        </Button>
      </motion.div>
    </div>
  )
}

