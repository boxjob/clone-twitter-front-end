'use client'
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

type Props = {
    placeholder: string
    value?: string
    onChange?: (newString:string ) => void
    password?: boolean
    filled?: boolean
    icon?: IconDefinition
}

export const InputCustom = ({ placeholder, value, onChange, password, filled, icon }:Props) => {
    const [ showPassword, setShowPassowrd ] = useState( false )
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
