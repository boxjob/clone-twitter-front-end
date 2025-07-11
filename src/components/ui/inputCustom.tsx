'use client'
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { KeyboardEvent, useState } from 'react'

type Props = {
    placeholder: string
    value?: string
    password?: boolean
    filled?: boolean
    icon?: IconDefinition
    onChange?: (newString:string ) => void
    onEnter?: () => void
}

export const InputCustom = ({ placeholder, value, onChange, onEnter, password, filled, icon }:Props) => {
    const [ showPassword, setShowPassowrd ] = useState( false )
    
    const handleKeyUp = ( e:KeyboardEvent<HTMLInputElement > ) => {
        if( e.code.toLowerCase() === 'enter' && onEnter ){
            onEnter()
        }
    }
    return (
        <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
            {icon && 
                <FontAwesomeIcon 
                    icon={ icon } 
                    className='size-6 text-gray-500 ml-4' 
                />
            }
            <input
                type={ password && !showPassword ? 'password' : 'text'}
                className='flex-1 outline-none bg-transparent h-full px-4'
                placeholder={ placeholder }
                value={ value }
                onChange={ e => onChange && onChange( e.target.value ) }
                onKeyUp={ handleKeyUp }
            />
            { password &&
                <FontAwesomeIcon 
                    onClick={ () => setShowPassowrd( !showPassword )}
                    icon={ showPassword ? faEye : faEyeSlash }
                    className='size-6 text-gray-500 cursor-pointer mr-4'
                />
            }
        </div>
    )
}
