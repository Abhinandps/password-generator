import React, { useEffect, useState } from 'react'
import '../App.css'
import { IoCopy } from 'react-icons/io5'
import InputField from './InputField'
import { getPasswords } from '../services/getPasswords'
import { useStore } from '../hooks/useStore'
const SavedPasswords = () => {

    const { authData } = useStore()

    const [savedPasswords, setSavedPasswords] = useState([])

    useEffect(() => {
        (async () => {
            const res = await getPasswords(authData?.email)
            setSavedPasswords(res)
        })()
    }, [])

    return (
        <div style={{ width: '800px' }}>
            <h2>🔑 Password Manager</h2>

            <input type="text" placeholder='🔎 Search passwords' style={{ outline: 'none', width: '100%', height: '100%', background: 'transparent', borderRadius: '8px', padding: '15px 20px', fontSize: '16px' }} />

            <ul className='list'>
                {
                    savedPasswords.length > 0 ? savedPasswords.map((item: any) =>
                    (
                        <li style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '15px' }} >
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid gray' }}>
                                <InputField type='text' label='Username' value={item?.username} />
                                <InputField type='password' label='Password' secure value={item?.password} />
                            </div>
                            <div style={{ display: 'flex', gap: '15px', padding: '0px 20px' }}>
                                {/* <button>edit</button>
                                <button>delete</button> */}
                            </div>
                        </li>
                    )
                    ) : (

                        <div>
                            No passwords created 🤷🏻
                        </div>
                    )
                }

            </ul>
        </div>
    )
}

export default SavedPasswords