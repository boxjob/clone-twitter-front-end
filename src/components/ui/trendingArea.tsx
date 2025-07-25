import React from 'react'
import { TrendingItem, TrendingItemSkeleton } from './trendingItem'

export const TrendingArea = () => {
  return (
    <div className='bg-gray-700 rounded-3xl'>
      <h2 className='text-xl p-6'>O que está acontecendo</h2>
      <div className='flex flex-col gap-4 p-6 pt-0'>
        <TrendingItem label='#Teste' count={1234}/>
        <TrendingItem label='#Teste' count={1234}/>
        <TrendingItemSkeleton/>
        <TrendingItemSkeleton/>
      </div>
    </div>
  )
}
