'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { InputCustom } from "../ui/inputCustom"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { ButtonCustom } from "../ui/buttonCustom"

export const SignUpForm = () => {
    const router = useRouter()
    const [ nameField, setNameField ] = useState('')
    const [ emailField, setEmailField ] = useState('')
    const [ passwordField, setPasswordField ] = useState('')

    const handleEnterButton = () => {
        router.replace('/home')
    }

  return (
    <>
        <InputCustom 
            placeholder="Digite seu nome"
            value={ nameField }
            onChange={ t => setNameField( t )} 
        />

        <InputCustom 
            placeholder="Digite seu e-mail"
            value={ emailField }
            onChange={ t => setEmailField( t )} 
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
