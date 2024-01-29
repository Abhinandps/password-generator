import React, { ChangeEvent, useEffect, useState } from 'react'
import image from '../assets/pw-generator.png'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopy } from "react-icons/io5";
import Filter from './Filter';
import { generatePassword } from '../services/generatePassword';
import { passwordStatus } from '../utils';

import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function Section() {


    const [generatedPassword, setGeneratedPassword] = useState<{ value: string; copied: boolean; }>({
        value: '',
        copied: false,
    })

    const notify = () => toast.success(`password saved successfully`);

    const [passwordSettings, setPasswordSettings] = useState({
        length: 20,
        includeUppercase: true,
        includeLowercase: true,
        includeNumbers: true,
        includeSpecialCharacters: true,
    });

    useEffect(() => {
        (async () => {
            const updatedPassword = await generatePassword(passwordSettings)
            setGeneratedPassword({ ...generatedPassword, value: updatedPassword, copied: false })
        })()
    }, [])

    const handleSettingsChange = async (event: any) => {
        const { name, type, checked, value }: { name: string; type: string, checked?: any, value: any } = event.target;
        const updatedSettings = { ...passwordSettings, [name]: type === 'checkbox' ? checked : value };
        setPasswordSettings(updatedSettings);
        const updatedPassword = await generatePassword(updatedSettings)
        setGeneratedPassword({ ...generatedPassword, value: updatedPassword, copied: false })
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGeneratedPassword({ ...generatedPassword, value: event.target.value, copied: false })
    }

    const handleCopy = () => {
        setGeneratedPassword({ ...generatedPassword, copied: true })
    }


    return (
        <>

            <button onClick={notify}>Notify!</button>

            <ToastContainer
                theme="dark"
                position="bottom-center"
                pauseOnHover
                transition={Slide}
            />


            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '50px' }}>
                <div style={{}}>
                    <img src={image} alt="image" style={{ width: '350px', height: 'auto' }} />
                </div>
                <div style={{ width: '450px' }}>
                    <h2>Strong password generator</h2>
                    <p>Create strong pass­words with free pass­word generator</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                        <div style={{ position: 'relative' }}>
                            <input
                                style={{ width: '100%', padding: '15px 20px', borderRadius: '5px', outline: 'none', fontSize: '18px', color: '#fff' }}
                                value={generatedPassword.value}
                                onChange={handleInputChange}
                                readOnly
                            />

                            <CopyToClipboard text={generatedPassword.value}
                                onCopy={handleCopy}>
                                <span style={{ cursor: 'pointer', position: 'absolute', top: '15px', right: '-30px', fontSize: '12px' }}> {generatedPassword.copied ? <><IoCopy color='#1abc9c' />  <span style={{ color: '#1abc9c' }}>Copied</span></> : <><IoCopy color='#ecf0f1' />  <span style={{ color: '#ecf0f1' }}>Copy</span></>} </span>
                            </CopyToClipboard>
                        </div>

                        <button onClick={handleSettingsChange}>Generate new</button>


                    </div>
                    {generatedPassword.value && passwordStatus.map((sentence) => {
                        if (passwordSettings.length >= sentence.minLength && passwordSettings.length <= sentence.maxLength) {
                            return (
                                <p key={sentence.text} style={{ fontSize: '12px', textAlign: 'left' }}>
                                    {sentence.text.split(" ").map((word, index) => {
                                        if (sentence.strongWords.includes(word)) {
                                            return <span key={index} style={{ fontWeight: "bold", color: sentence.color }}>{word}</span>;
                                        }
                                        return word + " ";
                                    })}
                                </p>
                            );
                        }
                        return null;
                    })}


                    {!generatedPassword.value &&
                        <p key={passwordStatus[0].text} style={{ fontSize: '12px', textAlign: 'left' }}>
                            {passwordStatus[0].text.split(" ").map((word, index) => {
                                if (passwordStatus[0].strongWords.includes(word)) {
                                    return <span key={index} style={{ fontWeight: "bold", color: passwordStatus[0].color }}>{word}</span>;
                                }
                                return word + " ";
                            })}
                        </p>
                    }

                </div>
            </div>

            <Filter passwordSettings={passwordSettings} handleSettingsChange={handleSettingsChange} />
        </>
    )
}

export default Section


