import React from 'react'
import "../App.css"
import InputField from './InputField'
import { IoMdClose } from "react-icons/io";
function PopUp({ generatedPassword }: any) {
    return (
        <div className='pop-up'>

            <InputField
                label='Username'
            />

            <InputField
                label='Password'
                secure
                value={generatedPassword?.value}
                opacity
                readOnly
            />

            <button style={{ margin: '10px 0', backgroundColor: '#16a085' }}>confirm</button>

            <span style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '20px', cursor: 'pointer' }}><IoMdClose /></span>
            
        </div>
    )
}

export default PopUp