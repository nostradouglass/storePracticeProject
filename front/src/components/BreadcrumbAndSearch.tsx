import React from 'react'

export default function BreadcrumbAndSearch() {
  return (
    <div className='flex flex-row my-16 mx-2 justify-between'>
        <div className='flex flex-row '> 
        <h4 className='text-gray-500 px-4'>Categories</h4>
        <h4 className='text-gray-500 px-4'>Filter</h4>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
        </div>
    </div>
  )
}
