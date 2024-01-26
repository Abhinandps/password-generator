import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useGoogleOneTapLogin } from '@react-oauth/google';

import { useStore } from './hooks/useStore';
import Profile from './components/Profile';
import Section from './components/Section';
function App() {
  const { authData } = useStore();

  const setAuthData = useStore((state: any) => state.setAuthData);
  return (
    <div className='App'>
      <GoogleOAuthProvider clientId='226721736694-1kv2noidnlotupms6mgspv5s4hl15oov.apps.googleusercontent.com'>
        {Object.keys(authData).length === 0 && (
          <div>
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
            l        </div>
        )}

        {
          Object.keys(authData).length > 0 && (
            <>
              {/* <Profile /> */}
              <Section />
            </>
          )
        }

      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
