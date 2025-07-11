'use client'

import { User } from '@/types/user'
import Link from 'next/link'
import React, { useState } from 'react'
import { ButtonCustom } from './buttonCustom'

type Props = {
    user:User
}

export const RecommendationItem = ({ user }:Props) => {
    const [ folloing, setFolloing ] = useState( false )
    const handleFollowButton = () => {
        setFolloing( true )
    }
    return (
        <div className='flex items-center'>
            <div className='size-10 mr-2 rounded-full overflow-hidden'>
                <Link href={`/${ user.slug }`}>
                    <img src={ user.avatar } alt={ user.name} className='size-full' />
                </Link>
            </div>
            <div className='flex-1 overflow-hidden'>
                <Link href={`/${ user.slug }`} className='block truncate'>
                    { user.name }
                </Link>
                <div className='truncate text-sm text-gray-400'>@{ user.slug }</div>
            </div>
            <div className='pl-2 w-20'>
                {!folloing && 
                    <ButtonCustom
                        label='Seguir'
                        onClick={ handleFollowButton }
                        size={ 3 }
                    />
                 }
            </div>
        </div>
    )
}

export const RecommendationItemSkeleton = () => {
    return(
        <div className='flex items-center animate-pulse'>
            <div className='size-10 mr-2 rounded-full bg-gray-600'></div>
            <div className='flex-1 flex flex-col gap-1'>
                <div className='bg-gray-600 w-3/4 h-4'></div>
                <div className='bg-gray-600 w-1/4 h-4'></div>
            </div>
        </div>
    )
} 
