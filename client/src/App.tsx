import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useGoogleOneTapLogin } from '@react-oauth/google';

import { useStore } from './hooks/useStore';
import Profile from './components/Profile';
import Section from './components/Section';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SavedPasswords from './components/SavedPasswords';


function App() {
  const { authData } = useStore();

  const setAuthData = useStore((state: any) => state.setAuthData);

  useEffect(() => {
    if (!localStorage.getItem('authData')) {
      localStorage.setItem('authData', JSON.stringify({}));
      console.log('called')
    }
  }, [])

  return (
    <div className={`${authData && Object.keys(authData).length === 0 && 'App'}`}>
      <Profile />
      <GoogleOAuthProvider clientId='226721736694-1kv2noidnlotupms6mgspv5s4hl15oov.apps.googleusercontent.com'>
        {authData && Object.keys(authData).length === 0 && (
          <GoogleLogin
            useOneTap
            onSuccess={async (credentialResponse) => {
              const response = await axios.post(
                'http://localhost:3001/login',
                {
                  token: credentialResponse.credential,
                }
              );
              const data = response.data;
              localStorage.setItem('authData', JSON.stringify(data));
              setAuthData(data);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        )}

        {
          authData && Object.keys(authData).length > 0 && (
            <Routes>
              <Route index element={<Section />} />
              <Route path='/saved-passwords' element={<SavedPasswords />} />
            </Routes>
          )
        }



      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
