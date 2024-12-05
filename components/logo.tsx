import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
      <span className="text-lg sm:text-xl font-bold">KYLIE COSMETICS</span>
      <span className="text-xs sm:text-sm font-medium">BY KYLIE JENNER</span>
    </Link>
  )
}

