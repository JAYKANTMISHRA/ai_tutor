import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image';
const DashboardHeader = () => {
  return (

    <div className='p-5 shadow-md flex justify-between items-center'>
    {/* Left side: Logo + Title */}
    <div className='flex gap-2 items-center'>
      <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
      <h2 className='font-bold text-2xl'>Smart Study</h2>
    </div>
  
    {/* Right side: User button */}
    <UserButton />
  </div>
  
  )
}

export default DashboardHeader
