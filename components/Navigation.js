import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="bg-gray-700 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between">
        <Link href="/">
          <a className="text-lg font-bold">My Blog</a>
        </Link>
        <Link href="/admin">
          <a className="text-lg font-bold">Admin</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
