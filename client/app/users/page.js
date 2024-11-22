import UserTable from '@/components/UserTable'
import React from 'react'

function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <UserTable />
    </div>
  )
}

export default page
