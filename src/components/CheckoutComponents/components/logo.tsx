import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <span className="font-bold">HOLOROOM</span>
    </Link>
  )
}

