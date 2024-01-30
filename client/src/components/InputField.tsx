import React from 'react'
import { IoCopy } from 'react-icons/io5'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import '../App.css'

function InputField({ type = 'text', label, secure, value, opacity, readOnly }: any) {
    return (
        <div style={{ textAlign: 'left', width: '350px', margin: '10px 20px' }} >
            <p style={{ fontSize: '15px', marginBottom: '5px' }}>{label}</p>
            <div style={{ backgroundColor: 'rgb(90 90 90 / 79%)', boxShadow: '0px 0px 2px', borderRadius: '8px', textAlign: 'left', position: 'relative' }}>
                <input className={`${opacity && 'opacity'}`} type={type} readOnly={readOnly} value={value} style={{ outline: 'none', width: '100%', height: '100%', background: 'transparent', border: 'none', padding: '15px 20px' }} />

                <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    {secure && (
                        <span><FaEye /></span>
                    )}
                    <span style={{ margin: '0px 8px' }}><IoCopy color='#ecf0f1' /></span>
                </div>

                {/* <FaEyeSlash /> */}
            </div>
        </div >
    )
}

export default InputField