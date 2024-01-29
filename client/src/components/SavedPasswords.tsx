import React from 'react'
import '../App.css'
import { IoCopy } from 'react-icons/io5'
import InputField from './InputField'
const SavedPasswords = () => {
    return (
        <div style={{ width: '800px' }}>
            <h2>🔑 Password Manager</h2>

            <input type="text" placeholder='🔎 Search passwords' style={{ outline: 'none', width: '100%', height: '100%', background: 'transparent', borderRadius: '8px', padding: '15px 20px',fontSize:'16px' }} />

            <ul className='list'>
                <li style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '15px' }} >
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid gray' }}>
                        <InputField type='text' label='Username' />
                        <InputField type='password' label='Password' secure />
                    </div>
                    <div style={{ display: 'flex', gap: '15px', padding: '0px 20px' }}>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SavedPasswords