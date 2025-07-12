import { ButtonCustom } from '@/components/ui/buttonCustom'
import { GeneralHeader } from '@/components/ui/general-header'
import { InputCustom } from '@/components/ui/inputCustom'
import { TextareaCustom } from '@/components/ui/textarea-Custom'
import { user } from '@/data/user'
import { faCamera, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Page() {
    const isMe = true
    return (
        <div>
            <GeneralHeader backHref='/'>
                <div className='text-lg font-bold'>Editar perfil</div>
            </GeneralHeader>
            <section className='border-b-2 border-gray-900'>
                <div
                    className='bg-gray-500 h-28 bg-no-repeat bg-cover bg-center flex justify-center items-center gap-4'
                    style={{ backgroundImage: 'url(' + user.cover + ')' }}
                >
                    <div className='cursor-pointer bg-black/80 bg-cover flex justify-center items-center size-12 rounded-full'>
                        <FontAwesomeIcon icon={faCamera} className='size-6' />
                    </div>
                    <div className='cursor-pointer bg-black/80 bg-cover flex justify-center items-center size-12 rounded-full'>
                        <FontAwesomeIcon icon={faXmark} className='size-6' />
                    </div>
                </div>
                <div className='-mt-12 px-6'>
                    <img src={user.avatar} alt={user.name} className='size-24 rounded-full' />
                    <div className='-mt-24 size-24 flex justify-center items-center'>
                        <div className='cursor-pointer bg-black/80 bg-cover flex justify-center items-center size-12 rounded-full'>
                            <FontAwesomeIcon icon={faCamera} className='size-6' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-6 flex flex-col gap-4'>
                <label>
                    <p className='text-lg text-gray-500 mb-2'>Nome</p>
                    <InputCustom 
                        placeholder='Digite seu nome'
                        value={ user.name }
                    />
                </label>
                <label>
                    <p className='text-lg text-gray-500 mb-2'>Bio</p>
                    <TextareaCustom 
                        placeholder='Descreve você mesmo'
                        rows={4}
                        value={ user.bio }
                    />
                </label>
                <label>
                    <p className='text-lg text-gray-500 mb-2'>Link</p>
                    <InputCustom 
                        placeholder='Digite um link'
                        value={ user.link }
                    />
                </label>

                <ButtonCustom label='Salvar Alterações' size={1} />
            </section>
        </div>
    )
}
