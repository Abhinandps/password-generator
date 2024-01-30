import React, { useCallback, useState } from 'react'
import "../App.css"
import InputField from './InputField'
import { IoMdClose } from "react-icons/io";
import { savePassword } from '../services/savePassword';
import { useStore } from '../hooks/useStore'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopUp({ generatedPassword, setPopUp, notify }: any) {

    const { authData } = useStore()




    const [passwordDto, setPasswordDto] = useState({
        email: authData?.email,
        username: '',
        password: generatedPassword?.value
    })

    const handleSavePassword = async (passwordDto: any) => {
        try {
            setPasswordDto({ ...passwordDto, username: '' })
            await savePassword(passwordDto)
            setPopUp((prev: any) => !prev)
            notify();
        } catch (err: any) {
            toast.error(err.message);
        }
    }

    const onChange = useCallback((key: string, value: string) => {
        setPasswordDto({
            ...passwordDto,
            [key]: value
        })
    }, [passwordDto])


    return (
        <div className='pop-up'>

            <InputField
                label='Username'
                onChange={(v: string) => onChange('username', v)}
            />

            <InputField
                label='Password'
                secure
                value={generatedPassword?.value}
                opacity
                readOnly
            />

            <button style={{ margin: '10px 0', backgroundColor: '#16a085' }} onClick={() => handleSavePassword(passwordDto)} >confirm</button>

            <span style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '20px', cursor: 'pointer' }}><IoMdClose /></span>

        </div>
    )
}

export default PopUp