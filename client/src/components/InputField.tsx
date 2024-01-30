import React, { useState } from 'react'
import { IoCopy } from 'react-icons/io5'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import '../App.css'
import CopyToClipboard from 'react-copy-to-clipboard';

function InputField({ type = 'text', label, secure, value, opacity, readOnly, onChange }: any) {
    const [showPassword, setShowPassword] = useState(false);

    const [generatedPassword, setGeneratedPassword] = useState<{ value: string; copied: boolean; }>({
        value: value,
        copied: false,
    })

    const handleCopy = () => {
        setGeneratedPassword({ ...generatedPassword, copied: true })
    }

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div style={{ textAlign: 'left', width: '350px', margin: '10px 20px' }} >
            <p style={{ fontSize: '15px', marginBottom: '5px' }}>{label}</p>
            <div style={{ backgroundColor: 'rgb(90 90 90 / 79%)', boxShadow: '0px 0px 2px', borderRadius: '8px', textAlign: 'left', position: 'relative' }}>
                <input
                    className={`${opacity && 'opacity'}`}
                    type={secure && showPassword ? 'text' : type}
                    readOnly={readOnly}
                    value={value}
                    style={{ outline: 'none', width: '100%', height: '100%', background: 'transparent', border: 'none', padding: '15px 20px' }}
                    onChange={e => {
                        if (onChange) {
                            onChange(e.target.value)
                        }
                    }}
                />

                <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    {secure && (
                        <span style={{ cursor: 'pointer' }}>{showPassword ? <FaEye onClick={handleTogglePassword} /> : <FaEyeSlash onClick={handleTogglePassword} />} </span>
                    )}
                    <CopyToClipboard text={value}

                        onCopy={handleCopy}>
                        <span style={{ cursor: 'pointer', margin: '0px 8px' }}>
                            {generatedPassword.copied ? <IoCopy color='#1abc9c' /> : <IoCopy color='#ecf0f1' />} </span>

                    </CopyToClipboard>
                    {/* <span style={{ margin: '0px 8px' }}><IoCopy color='#ecf0f1' /></span> */}
                </div>

                {/* <FaEyeSlash /> */}
            </div>
        </div >
    )
}

export default InputField