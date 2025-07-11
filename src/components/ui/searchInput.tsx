'use client'

import React, { useState } from 'react'
import { InputCustom } from './inputCustom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
    defaultValue?: string
    hideOnSearch?: boolean
}

export const SearchInput = ({ defaultValue, hideOnSearch }:Props) => {
    const router = useRouter()
    const pathname = usePathname()
    const [ searchInput, setSearchInput ] = useState( defaultValue )
    
    const handleSearchEnter = () => {
        if( searchInput ){
            router.push('/search?q='+encodeURIComponent( searchInput ))
        }
    }

    if( hideOnSearch && pathname === '/search' ) return null

    return (
        <InputCustom
            placeholder='Buscar'
            icon={ faMagnifyingGlass }
            value={ searchInput }
            onChange={ t => setSearchInput( t )}
            onEnter={ handleSearchEnter }
            filled
        />
    )
}
