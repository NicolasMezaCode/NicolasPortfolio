import React from 'react'
import Image from 'next/image'
export default function Header () {
  return (
    <header>
      <nav>
        <Image src="/images/logo.png" alt="logo" width={201} height={31} />
      </nav>
    </header>
  )
}
