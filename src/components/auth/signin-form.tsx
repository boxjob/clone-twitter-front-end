'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { InputCustom } from "../ui/inputCustom"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { ButtonCustom } from "../ui/buttonCustom"

export const SigninForm = () => {
    const router = useRouter()
    const [ emailField, setEmailField ] = useState('')
    const [ passwordField, setPasswordField ] = useState('')

    const handleEnterButton = () => {
        router.replace('/home')
    }

  return (
    <>
        <InputCustom 
            placeholder="Digite seu e-mail"
            value={ emailField }
            onChange={ t => setEmailField( t )} 
            icon={faHeart}
        />

        <InputCustom 
            placeholder='Digite sua senha' 
            value={ passwordField }
            onChange={ t => setPasswordField( t )}
            password
        />

        <ButtonCustom
            onClick={ handleEnterButton }
            label='Entrar'
            size={ 1 }
        />
    </>
  )
}
