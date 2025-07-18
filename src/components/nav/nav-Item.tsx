'use client'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
    label: string,
    icon: IconDefinition
    href: string
    active?: boolean
}

export const NavItem = ({ label, icon, href, active }:Props) => {

    const pathName = usePathname()
    const isMe = pathName === href

    return (
        <Link
            className={`flex items-center gap-6 py-3 ${ active || isMe ? 'opacity-100' : 'opacity-50' } hover:opacity-100`} 
            href={ href }
        >
            <FontAwesomeIcon icon={ icon } className='size-6'/>
            <div className='text-lg'>{ label }</div>
        </Link>
    )
}
